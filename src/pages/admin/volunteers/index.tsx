import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import volunteerService, { Volunteer, VolunteerUpdateData } from '../../../services/volunteerService';
import { toast } from 'react-toastify';

const VolunteerApplications = () => {
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
      const data = await volunteerService.getAll(filters);
      setApplications(data);
    } catch (error) {
      console.error('Başvurular yüklenemedi:', error);
      toast.error('Başvurular yüklenemedi');
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
    if (!confirm('Bu başvuruyu silmek istediğinizden emin misiniz?')) return;

    try {
      await volunteerService.delete(id);
      toast.success('Başvuru silindi');
      fetchApplications();
      fetchPendingCount();
    } catch (error) {
      console.error('Başvuru silinemedi:', error);
      toast.error('Başvuru silinemedi');
    }
  };

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      await volunteerService.update(id, { status: newStatus });
      toast.success('Durum güncellendi');
      fetchApplications();
      fetchPendingCount();
      setModal(false);
    } catch (error) {
      console.error('Durum güncellenemedi:', error);
      toast.error('Durum güncellenemedi');
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

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card>
            <CardBody>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h5>Gönüllü Başvuruları</h5>
                  {pendingCount > 0 && (
                    <small className="text-muted">
                      {pendingCount} yeni başvuru bekliyor
                    </small>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <Button
                  color={filter === 'all' ? 'primary' : 'light'}
                  className="me-2"
                  onClick={() => setFilter('all')}
                >
                  Tümü ({applications.length})
                </Button>
                <Button
                  color={filter === 'new' ? 'primary' : 'light'}
                  className="me-2"
                  onClick={() => setFilter('new')}
                >
                  Yeni
                </Button>
                <Button
                  color={filter === 'contacted' ? 'primary' : 'light'}
                  className="me-2"
                  onClick={() => setFilter('contacted')}
                >
                  İletişime Geçildi
                </Button>
                <Button
                  color={filter === 'accepted' ? 'primary' : 'light'}
                  className="me-2"
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

              {loading ? (
                <div className="text-center py-5">Yükleniyor...</div>
              ) : applications.length === 0 ? (
                <div className="text-center py-5 text-muted">
                  Henüz başvuru yapılmamış
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
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
                          <td>{formatDate(application.submittedAt)}</td>
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
    </Container>
  );
};

export default VolunteerApplications;
