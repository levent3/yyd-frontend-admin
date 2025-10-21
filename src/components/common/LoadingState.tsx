/**
 * Loading State Component
 *
 * NEDEN BU COMPONENT VAR?
 * -----------------------
 * 17+ sayfada aynı loading pattern tekrar ediyordu:
 * - Spinner + "Yükleniyor..." metni
 * - Aynı div/Container yapısı
 * Bu component ile ~200 satır kod tekrarı azaldı.
 *
 * KULLANIM:
 * ---------
 * if (loading) return <LoadingState />;
 * if (loading) return <LoadingState message="Kampanyalar yükleniyor..." />;
 */

import React from 'react';
import { Container, Spinner } from 'reactstrap';

interface LoadingStateProps {
  /**
   * Gösterilecek mesaj (opsiyonel)
   * @default 'Yükleniyor...'
   */
  message?: string;

  /**
   * Full page mi yoksa inline mı?
   * @default true - Full page wrapper ile gösterir
   */
  fullPage?: boolean;

  /**
   * Spinner rengi
   * @default 'primary'
   */
  spinnerColor?: string;

  /**
   * Spinner boyutu
   * @default undefined (default size)
   */
  spinnerSize?: 'sm' | undefined;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Yükleniyor...',
  fullPage = true,
  spinnerColor = 'primary',
  spinnerSize,
}) => {
  const content = (
    <div className="text-center py-5">
      <Spinner color={spinnerColor} size={spinnerSize} />
      <p className="mt-2 text-muted">{message}</p>
    </div>
  );

  if (fullPage) {
    return (
      <div className="page-body">
        <Container fluid={true}>
          {content}
        </Container>
      </div>
    );
  }

  return content;
};

export default LoadingState;
