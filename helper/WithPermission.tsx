import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../src/context/AuthContext";
import { toast } from "react-toastify";
import { Spinner } from "reactstrap";

interface WithPermissionOptions {
  moduleKey: string; // 'users', 'projects', 'news', etc.
  action?: 'read' | 'create' | 'update' | 'delete'; // Varsayılan: 'read'
  redirectTo?: string; // Varsayılan: '/dashboard'
}

/**
 * Higher Order Component: Sayfa seviyesi permission kontrolü
 *
 * Kullanım:
 * export default withPermission(UsersPage, {
 *   moduleKey: 'users',
 *   action: 'read'
 * });
 *
 * Özellikler:
 * - Kullanıcının belirtilen module'e erişim yetkisi yoksa:
 *   1. Toast ile hata mesajı gösterir
 *   2. Belirlenen sayfaya yönlendirir (varsayılan: dashboard)
 * - SuperAdmin tüm sayfalara erişebilir
 */
const withPermission = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: WithPermissionOptions
) => {
  const PermissionGuardedComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    const [isChecking, setIsChecking] = useState(true);
    const [hasPermission, setHasPermission] = useState(false);

    const {
      moduleKey,
      action = 'read',
      redirectTo = '/dashboard'
    } = options;

    useEffect(() => {
      const checkPermission = () => {
        // Auth henüz yükleniyorsa bekle
        if (authLoading) {
          return;
        }

        // Kullanıcı yoksa login'e yönlendir
        if (!user) {
          toast.error('Lütfen giriş yapın');
          router.push('/authentication/login');
          return;
        }

        // SuperAdmin tüm yetkilere sahip
        const isSuperAdmin = user.role?.name?.toLowerCase() === 'superadmin';
        if (isSuperAdmin) {
          setHasPermission(true);
          setIsChecking(false);
          return;
        }

        // Kullanıcının permission'larını kontrol et
        const userPermission = user.permissions?.find(
          (p) => p.moduleKey === moduleKey
        );

        // Permission bulunamadıysa veya belirtilen action yetki yoksa
        if (!userPermission || !userPermission[action]) {
          // Hata mesajı göster
          toast.error(`Bu sayfaya erişim yetkiniz yok! (${moduleKey})`);

          // Dashboard'a yönlendir
          setTimeout(() => {
            router.push(redirectTo);
          }, 1000); // Toast görmesi için 1 saniye bekle

          setHasPermission(false);
          setIsChecking(false);
          return;
        }

        // Yetki varsa sayfayı göster
        setHasPermission(true);
        setIsChecking(false);
      };

      checkPermission();
    }, [user, authLoading, router, moduleKey, action, redirectTo]);

    // Kontrol devam ediyorsa loading göster
    if (isChecking || authLoading) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
          <Spinner color="primary" />
          <span className="ms-2">Yetki kontrol ediliyor...</span>
        </div>
      );
    }

    // Yetki yoksa boş sayfa göster (zaten redirect ediliyor)
    if (!hasPermission) {
      return null;
    }

    // Yetki varsa sayfayı render et
    return <WrappedComponent {...props} />;
  };

  return PermissionGuardedComponent;
};

export default withPermission;
