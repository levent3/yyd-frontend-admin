import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Table, Button, Badge, Form, FormGroup, Label, Input } from "reactstrap";
import roleService, { RolePermission, Module } from "../../../services/roleService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const RoleDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState<RolePermission[]>([]);
  const [allModules, setAllModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchRoleDetails();
      fetchAllModules();
    }
  }, [id]);

  const fetchRoleDetails = async () => {
    try {
      setLoading(true);
      const role = await roleService.getRoleById(Number(id));
      setRoleName(role.name);

      const perms = await roleService.getRolePermissions(Number(id));
      setPermissions(perms);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Rol bilgileri yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const fetchAllModules = async () => {
    try {
      const modules = await roleService.getAllModules();
      setAllModules(modules);
    } catch (error) {
      console.error('Modüller yüklenirken hata:', error);
      toast.error('Modüller yüklenirken hata oluştu');
    }
  };

  const handlePermissionChange = async (moduleId: number, action: string, value: boolean) => {
    try {
      const permission = permissions.find(p => p.module.id === moduleId);

      if (!permission) {
        // Yeni izin oluştur
        await roleService.assignPermission(Number(id), moduleId, {
          [action]: value,
          read: action === 'read' ? value : false,
          create: action === 'create' ? value : false,
          update: action === 'update' ? value : false,
          delete: action === 'delete' ? value : false,
        });
      } else {
        // Mevcut izni güncelle
        await roleService.assignPermission(Number(id), moduleId, {
          read: action === 'read' ? value : permission.permissions.read,
          create: action === 'create' ? value : permission.permissions.create,
          update: action === 'update' ? value : permission.permissions.update,
          delete: action === 'delete' ? value : permission.permissions.delete,
        });
      }

      toast.success('İzin güncellendi');
      fetchRoleDetails();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'İzin güncellenirken hata oluştu');
    }
  };

  if (loading) {
    return (
      <div className="page-body">
        <Container fluid={true}>
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Yükleniyor...</span>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="page-body">
      <Breadcrumbs
        title={`${roleName} - İzinler`}
        mainTitle="Rol İzinleri"
        parent="Rol Yönetimi"
      />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h4>{roleName}</h4>
                    <p className="text-muted mb-0">Modül izinlerini düzenleyin</p>
                  </div>
                  <Button
                    color="secondary"
                    size="sm"
                    onClick={() => router.push('/admin/roles')}
                  >
                    ← Geri Dön
                  </Button>
                </div>

                <div className="table-responsive">
                  <Table bordered hover>
                    <thead className="table-light">
                      <tr>
                        <th>Modül</th>
                        <th className="text-center" style={{width: '120px'}}>Okuma</th>
                        <th className="text-center" style={{width: '120px'}}>Oluşturma</th>
                        <th className="text-center" style={{width: '120px'}}>Güncelleme</th>
                        <th className="text-center" style={{width: '120px'}}>Silme</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allModules.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="text-center text-muted py-4">
                            Modül bulunamadı.
                          </td>
                        </tr>
                      ) : (
                        allModules.map((module) => {
                          const permission = permissions.find(p => p.module.id === module.id);
                          const perms = permission?.permissions || {
                            read: false,
                            create: false,
                            update: false,
                            delete: false
                          };

                          return (
                            <tr key={module.id}>
                              <td>
                                <strong>{module.name}</strong>
                                <br />
                                <small className="text-muted">{module.moduleKey}</small>
                              </td>
                              <td className="text-center">
                                <Input
                                  type="checkbox"
                                  checked={perms.read}
                                  onChange={(e) => handlePermissionChange(module.id, 'read', e.target.checked)}
                                  disabled={roleName.toLowerCase() === 'superadmin'}
                                />
                              </td>
                              <td className="text-center">
                                <Input
                                  type="checkbox"
                                  checked={perms.create}
                                  onChange={(e) => handlePermissionChange(module.id, 'create', e.target.checked)}
                                  disabled={roleName.toLowerCase() === 'superadmin'}
                                />
                              </td>
                              <td className="text-center">
                                <Input
                                  type="checkbox"
                                  checked={perms.update}
                                  onChange={(e) => handlePermissionChange(module.id, 'update', e.target.checked)}
                                  disabled={roleName.toLowerCase() === 'superadmin'}
                                />
                              </td>
                              <td className="text-center">
                                <Input
                                  type="checkbox"
                                  checked={perms.delete}
                                  onChange={(e) => handlePermissionChange(module.id, 'delete', e.target.checked)}
                                  disabled={roleName.toLowerCase() === 'superadmin'}
                                />
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </Table>
                </div>

                {roleName.toLowerCase() === 'superadmin' && (
                  <div className="alert alert-info mt-3">
                    <i className="fa fa-info-circle me-2"></i>
                    Superadmin rolünün izinleri değiştirilemez.
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoleDetailPage;
