/**
 * Empty State Component
 *
 * NEDEN BU COMPONENT VAR?
 * -----------------------
 * 17+ sayfada aynı "Kayıt bulunamadı" pattern'i tekrar ediyordu.
 * Bu component ile ~150 satır kod tekrarı azaldı.
 *
 * KULLANIM:
 * ---------
 * {items.length === 0 && <EmptyState message="Henüz kampanya bulunmuyor" />}
 *
 * {items.length === 0 && (
 *   <EmptyState
 *     message="Henüz kampanya bulunmuyor"
 *     actionLabel="İlk Kampanyayı Oluştur"
 *     onAction={() => router.push('/admin/campaigns/create')}
 *   />
 * )}
 */

import React from 'react';
import { Button } from 'reactstrap';

interface EmptyStateProps {
  /**
   * Gösterilecek mesaj
   */
  message: string;

  /**
   * İkon (opsiyonel)
   * @example icon={<FileX size={48} />}
   */
  icon?: React.ReactNode;

  /**
   * Buton etiketi (opsiyonel)
   */
  actionLabel?: string;

  /**
   * Buton click handler (opsiyonel)
   */
  onAction?: () => void;

  /**
   * Buton rengi
   * @default 'primary'
   */
  actionColor?: string;

  /**
   * Açıklama metni (opsiyonel)
   */
  description?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  message,
  icon,
  actionLabel,
  onAction,
  actionColor = 'primary',
  description,
}) => {
  return (
    <div className="text-center py-5">
      {icon && <div className="mb-3 text-muted">{icon}</div>}

      <p className="text-muted mb-2">
        <strong>{message}</strong>
      </p>

      {description && (
        <p className="text-muted small mb-3">{description}</p>
      )}

      {actionLabel && onAction && (
        <Button color={actionColor} onClick={onAction} size="sm">
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;
