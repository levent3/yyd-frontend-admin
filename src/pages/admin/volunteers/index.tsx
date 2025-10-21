/**
 * Volunteer Applications Page
 *
 * REFACTORING NOTU:
 * -----------------
 * Bu sayfa refactor edildi:
 * - formatDate → utils/formatters'dan import edildi
 * - Loading state → LoadingState component kullanıyor
 * - Empty state → EmptyState component kullanıyor
 * - window.confirm → useConfirm hook kullanıyor
 * - toast.success/error → useConfirm hook kullanıyor
 */

import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Breadcrumbs from "CommonElements/Breadcrumbs";
import { Dashboard } from "utils/Constant";
import { formatDate } from "utils/formatters";
import LoadingState from "../../../components/common/LoadingState";
import EmptyState from "../../../components/common/EmptyState";
import useConfirm from "../../../hooks/useConfirm";
import volunteerService, { Volunteer } from '../../../services/volunteerService';

const VolunteerApplications = () => {
  const confirm = useConfirm();
  const [applications, setApplications] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [modal, setModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<Volunteer | null>(null);
  const [pendingCount, setPendingCount] = useState<number>(0);

  useEffect(() => {
    fetchApplications();
    fetchPendingCount();
  }, [filter]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const filters = filter !== 'all' ? { status: filter } : undefined;
      const response = await volunteerService.getAll(filters);
      setApplications(response.data);
    } catch (error) {
      console.error('Başvurular yüklenemedi:', error);
      confirm.error('Hata!', 'Başvurular yüklenemedi');
    } finally {
      setLoading(false);
    }
  };

  const fetchPendingCount = async () => {
    try {
      const count = await volunteerService.getPendingCount();
      setPendingCount(count);
    } catch (error) {
      console.error('Bekleyen başvuru sayısı alınamadı:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!(await confirm('Bu başvuruyu silmek istediğinizden emin misiniz?', 'Bu işlem geri alınamaz.'))) return;

    try {
      await volunteerService.delete(id);
      confirm.success('Başarılı!', 'Başvuru silindi');
      fetchApplications();
      fetchPendingCount();
    } catch (error) {
      console.error('Başvuru silinemedi:', error);
      confirm.error('Hata!', 'Başvuru silinemedi');
    }
  };

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      await volunteerService.update(id, { status: newStatus });
      confirm.success('Başarılı!', 'Durum güncellendi');
      fetchApplications();
      fetchPendingCount();
      setModal(false);
    } catch (error) {
      console.error('Durum güncellenemedi:', error);
      confirm.error('Hata!', 'Durum güncellenemedi');
    }
  };

  const openDetailModal = (application: Volunteer) => {
    setSelectedApplication(application);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedApplication(null);
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { color: string; text: string }> = {
      new: { color: 'info', text: 'Yeni' },
      contacted: { color: 'warning', text: 'İletişime Geçildi' },
      accepted: { color: 'success', text: 'Kabul Edildi' },
      rejected: { color: 'danger', text: 'Reddedildi' }
    };
    const statusInfo = statusMap[status] || { color: 'secondary', text: status };
    return <Badge color={statusInfo.color}>{statusInfo.text}</Badge>;
  };

  if (loading) {
    return <LoadingState message="Gönüllü başvuruları yükleniyor..." />;
  }

  return (
    <div className="page-body">
      <Breadcrumbs title="Gönüllüler" mainTitle="Gönüllü Başvuruları" parent={Dashboard} />
      <Container fluid={true}>
        {/* Filter Buttons */}
        <Row className="mb-3">
          <Col sm={12}>
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h6 className="mb-0">Filtrele</h6>
                    {pendingCount > 0 && (
                      <small className="text-muted">
                        {pendingCount} yeni başvuru bekliyor
                      </small>
                    )}
                  </div>
                </div>
                <div className="btn-group" role="group">
                  <Button
                    color={filter === 'all' ? 'primary' : 'light'}
                    onClick={() => setFilter('all')}
                  >
                    Tümü ({applications.length})
                  </Button>
                  <Button
                    color={filter === 'new' ? 'primary' : 'light'}
                    onClick={() => setFilter('new')}
                  >
                    Yeni
                  </Button>
                  <Button
                    color={filter === 'contacted' ? 'primary' : 'light'}
                    onClick={() => setFilter('contacted')}
                  >
                    İletişime Geçildi
                  </Button>
                  <Button
                    color={filter === 'accepted' ? 'primary' : 'light'}
                    onClick={() => setFilter('accepted')}
                  >
                    Kabul Edildi
                  </Button>
                  <Button
                    color={filter === 'rejected' ? 'primary' : 'light'}
                    onClick={() => setFilter('rejected')}
                  >
                    Reddedildi
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Applications Table */}
        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <h5 className="mb-0">Başvuru Listesi</h5>
              </CardHeader>
              <CardBody>
                {applications.length === 0 ? (
                  <EmptyState message="Henüz başvuru yapılmamış" />
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>Ad Soyad</th>
                          <th>E-posta</th>
                          <th>Telefon</th>
                          <th>Durum</th>
                          <th>Başvuru Tarihi</th>
                          <th className="text-end">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((application) => (
                          <tr key={application.id}>
                            <td className="fw-bold">{application.fullName}</td>
                            <td>{application.email}</td>
                            <td>{application.phoneNumber || '-'}</td>
                            <td>{getStatusBadge(application.status)}</td>
                            <td>
                              <small>{formatDate(application.submittedAt)}</small>
                            </td>
                            <td className="text-end">
                              <Button
                                color="info"
                                size="sm"
                                className="me-2"
                                onClick={() => openDetailModal(application)}
                              >
                                Detay
                              </Button>
                              <Button
                                color="danger"
                                size="sm"
                                onClick={() => handleDelete(application.id)}
                              >
                                Sil
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Detail Modal */}
      <Modal isOpen={modal} toggle={closeModal} size="lg">
        <ModalHeader toggle={closeModal}>
          Başvuru Detayı
        </ModalHeader>
        <ModalBody>
          {selectedApplication && (
            <>
              <div className="mb-3">
                <h6>Kişisel Bilgiler</h6>
                <hr />
                <Row>
                  <Col md={6}>
                    <p><strong>Ad Soyad:</strong> {selectedApplication.fullName}</p>
                    <p><strong>E-posta:</strong> {selectedApplication.email}</p>
                  </Col>
                  <Col md={6}>
                    <p><strong>Telefon:</strong> {selectedApplication.phoneNumber || '-'}</p>
                    <p><strong>Durum:</strong> {getStatusBadge(selectedApplication.status)}</p>
                  </Col>
                </Row>
                <p><strong>Başvuru Tarihi:</strong> {formatDate(selectedApplication.submittedAt)}</p>
              </div>

              {selectedApplication.message && (
                <div className="mb-3">
                  <h6>Mesaj</h6>
                  <hr />
                  <p style={{ whiteSpace: 'pre-wrap' }}>{selectedApplication.message}</p>
                </div>
              )}

              <div className="mb-3">
                <h6>Durum Güncelle</h6>
                <hr />
                <div className="d-flex gap-2">
                  <Button
                    color="info"
                    size="sm"
                    onClick={() => handleStatusChange(selectedApplication.id, 'new')}
                    disabled={selectedApplication.status === 'new'}
                  >
                    Yeni
                  </Button>
                  <Button
                    color="warning"
                    size="sm"
                    onClick={() => handleStatusChange(selectedApplication.id, 'contacted')}
                    disabled={selectedApplication.status === 'contacted'}
                  >
                    İletişime Geçildi
                  </Button>
                  <Button
                    color="success"
                    size="sm"
                    onClick={() => handleStatusChange(selectedApplication.id, 'accepted')}
                    disabled={selectedApplication.status === 'accepted'}
                  >
                    Kabul Et
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleStatusChange(selectedApplication.id, 'rejected')}
                    disabled={selectedApplication.status === 'rejected'}
                  >
                    Reddet
                  </Button>
                </div>
              </div>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={closeModal}>
            Kapat
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default VolunteerApplications;
