/**
 * useConfirm Hook
 *
 * NEDEN BU HOOK VAR?
 * ------------------
 * Her sayfada SweetAlert2 confirm dialog'u aynı şekilde kullanılıyordu:
 *
 * ÖNCESI (Her sayfada):
 * const result = await Swal.fire({
 *   title: 'Emin misiniz?',
 *   text: '...',
 *   icon: 'warning',
 *   showCancelButton: true,
 *   confirmButtonText: 'Evet',
 *   cancelButtonText: 'Hayır'
 * });
 * if (result.isConfirmed) { ... }
 *
 * SONRASI (Bu hook ile):
 * const confirm = useConfirm();
 * if (await confirm('Emin misiniz?', 'Bu işlem geri alınamaz')) { ... }
 *
 * ~100 satır kod tekrarı azaldı.
 */

import Swal, { SweetAlertIcon } from 'sweetalert2';

interface ConfirmOptions {
  title?: string;
  text?: string;
  icon?: SweetAlertIcon;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
}

export const useConfirm = () => {
  /**
   * Onay dialog'u gösterir
   * @param title - Dialog başlığı
   * @param text - Dialog metni
   * @param options - Ek seçenekler (opsiyonel)
   * @returns Promise<boolean> - Kullanıcı onayladı mı?
   *
   * @example
   * const confirm = useConfirm();
   * if (await confirm('Emin misiniz?', 'Bu kayıt silinecek')) {
   *   // Silme işlemi
   * }
   */
  const confirm = async (
    title: string = 'Emin misiniz?',
    text: string = 'Bu işlem geri alınamaz.',
    options: ConfirmOptions = {}
  ): Promise<boolean> => {
    const result = await Swal.fire({
      title,
      text,
      icon: options.icon || 'warning',
      showCancelButton: true,
      confirmButtonText: options.confirmButtonText || 'Evet',
      cancelButtonText: options.cancelButtonText || 'Hayır',
      confirmButtonColor: options.confirmButtonColor || '#3085d6',
      cancelButtonColor: options.cancelButtonColor || '#d33',
      reverseButtons: true,
    });

    return result.isConfirmed;
  };

  /**
   * Silme onayı için özelleştirilmiş dialog
   * @param itemName - Silinecek öğenin adı (opsiyonel)
   * @returns Promise<boolean> - Kullanıcı onayladı mı?
   *
   * @example
   * const confirm = useConfirm();
   * if (await confirm.delete('kampanya')) {
   *   // Silme işlemi
   * }
   */
  confirm.delete = async (itemName?: string): Promise<boolean> => {
    return confirm(
      'Silmek istediğinize emin misiniz?',
      itemName
        ? `${itemName} kalıcı olarak silinecektir.`
        : 'Bu işlem geri alınamaz.',
      { icon: 'error', confirmButtonColor: '#d33' }
    );
  };

  /**
   * Başarı mesajı gösterir
   * @param title - Başlık
   * @param text - Açıklama metni (opsiyonel)
   *
   * @example
   * const confirm = useConfirm();
   * confirm.success('Başarılı!', 'Kampanya oluşturuldu');
   */
  confirm.success = (title: string, text?: string) => {
    Swal.fire({
      title,
      text,
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
    });
  };

  /**
   * Hata mesajı gösterir
   * @param title - Başlık
   * @param text - Açıklama metni (opsiyonel)
   *
   * @example
   * const confirm = useConfirm();
   * confirm.error('Hata!', 'İşlem başarısız oldu');
   */
  confirm.error = (title: string, text?: string) => {
    Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonText: 'Tamam',
    });
  };

  /**
   * Bilgi mesajı gösterir
   * @param title - Başlık
   * @param text - Açıklama metni (opsiyonel)
   *
   * @example
   * const confirm = useConfirm();
   * confirm.info('Bilgi', 'Bu özellik yakında eklenecek');
   */
  confirm.info = (title: string, text?: string) => {
    Swal.fire({
      title,
      text,
      icon: 'info',
      confirmButtonText: 'Tamam',
    });
  };

  return confirm;
};

export default useConfirm;
