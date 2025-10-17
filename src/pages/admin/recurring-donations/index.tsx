import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Table, Button, Badge, Spinner, Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Dashboard } from "utils/Constant";
import recurringDonationService, { RecurringDonation } from "../../../services/recurringDonationService";
import { toast } from "react-toastify";
import { Eye, Trash2, Play, Pause, XCircle } from "react-feather";
import { PaginationInfo } from '../../../types/pagination';
import Pagination from '../../../components/common/Pagination';

const RecurringDonationsPage = () => {
  const [donations, setDonations] = useState<RecurringDonation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ status: '', frequency: '' });
  const [modal, setModal] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<RecurringDonation | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchDonations();
  }, [filter, currentPage]);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      const params: any = { page: currentPage, limit: 10 };
      if (filter.status) params.status = filter.status;
      if (filter.frequency) params.frequency = filter.frequency;

      const response = await recurringDonationService.getAllRecurringDonations(params);
      const { data, pagination } = response;
      setDonations(data);
      setPagination(pagination);
    } catch (error: any) {
      console.error('Düzenli bağışlar yüklenirken hata:', error);
      toast.error('Düzenli bağışlar yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleViewDonation = (donation: RecurringDonation) => {
    setSelectedDonation(donation);
    setModal(true);
  };

  const handlePause = async (id: number) => {
    if (!confirm('Bu düzenli bağışı durdurmak istediğinizden emin misiniz?')) return;

    try {
      await recurringDonationService.pauseRecurringDonation(id);
      toast.success('Düzenli bağış durduruldu');
      fetchDonations();
    } catch (error: any) {
      console.error('Hata:', error);
      toast.error(error.response?.data?.message || 'İşlem başarısız');
    }
  };

  const handleResume = async (id: number) => {
    try {
      await recurringDonationService.resumeRecurringDonation(id);
      toast.success('Düzenli bağış yeniden başlatıldı');
      fetchDonations();
    } catch (error: any) {
      console.error('Hata:', error);
      toast.error(error.response?.data?.message || 'İşlem başarısız');
    }
  };

  const handleCancel = async (id: number) => {
    if (!confirm('Bu düzenli bağışı iptal etmek istediğinizden emin misiniz? Bu işlem geri alınamaz!')) return;

    try {
      await recurringDonationService.cancelRecurringDonation(id);
      toast.success('Düzenli bağış iptal edildi');
      fetchDonations();
    } catch (error: any) {
      console.error('Hata:', error);
      toast.error(error.response?.data?.message || 'İşlem başarısız');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bu kaydı silmek istediğinizden emin misiniz?')) return;

    try {
      await recurringDonationService.deleteRecurringDonation(id);
      toast.success('Kayıt silindi');
      fetchDonations();
    } catch (error: any) {
      console.error('Hata:', error);
      toast.error(error.response?.data?.message || 'Silme işlemi başarısız');
    }
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return '-';
    return new Date(date).toLocaleDateString('tr-TR');
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge color="success">Aktif</Badge>;
      case 'paused':
        return <Badge color="warning">Durduruldu</Badge>;
      case 'cancelled':
        return <Badge color="danger">İptal</Badge>;
      case 'completed':
        return <Badge color="info">Tamamlandı</Badge>;
      default:
        return <Badge color="secondary">{status}</Badge>;
    }
  };

  const getFrequencyText = (frequency: string) => {
    switch (frequency) {
      case 'monthly': return 'Aylık';
      case 'quarterly': return '3 Aylık';
      case 'yearly': return 'Yıllık';
      default: return frequency;
    }
  };

  if (loading) {
    return (
      <div className="page-body">
        <Container fluid={true}>
          <div className="text-center py-5">
            <Spinner color="primary" />
            <p className="mt-2">Yükleniyor...</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="page-body">
      <Breadcrumbs title="Düzenli Bağışlar" mainTitle="Düzenli Bağış Yönetimi" parent={Dashboard} />
      <Container fluid={true}>
        <Row className="mb-3">
          <Col sm={12}>
            <Card>
              <CardBody>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="statusFilter">Durum</Label>
                      <Input
                        type="select"
                        id="statusFilter"
                        value={filter.status}
                        onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                      >
                        <option value="">Tümü</option>
                        <option value="active">Aktif</option>
                        <option value="paused">Durduruldu</option>
                        <option value="cancelled">İptal</option>
                        <option value="completed">Tamamlandı</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="frequencyFilter">Periyot</Label>
                      <Input
                        type="select"
                        id="frequencyFilter"
                        value={filter.frequency}
                        onChange={(e) => setFilter({ ...filter, frequency: e.target.value })}
                      >
                        <option value="">Tümü</option>
                        <option value="monthly">Aylık</option>
                        <option value="quarterly">3 Aylık</option>
                        <option value="yearly">Yıllık</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <h5 className="mb-0">Tüm Düzenli Bağışlar</h5>
              </CardHeader>
              <CardBody>
                {donations.length === 0 ? (
                  <div className="text-center py-5">
                    <p className="text-muted">Henüz düzenli bağış bulunmuyor.</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead className="table-light">
                        <tr>
                          <th>Bağışçı</th>
                          <th>Tutar</th>
                          <th>Periyot</th>
                          <th>Durum</th>
                          <th>Sonraki Ödeme</th>
                          <th>Toplam Ödeme</th>
                          <th className="text-end">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {donations.map((donation) => (
                          <tr key={donation.id}>
                            <td>
                              <div>
                                <strong>{donation.donor.fullName}</strong>
                                <br />
                                <small className="text-muted">{donation.donor.email}</small>
                              </div>
                            </td>
                            <td>{formatCurrency(donation.amount, donation.currency)}</td>
                            <td>{getFrequencyText(donation.frequency)}</td>
                            <td>{getStatusBadge(donation.status)}</td>
                            <td>
                              <small>{formatDate(donation.nextPaymentDate)}</small>
                            </td>
                            <td>
                              {donation.totalPaymentsMade}
                              {donation.totalPaymentsPlanned && ` / ${donation.totalPaymentsPlanned}`}
                              {donation.failedAttempts > 0 && (
                                <span className="text-danger ms-2" title="Başarısız denemeler">
                                  ({donation.failedAttempts} hata)
                                </span>
                              )}
                            </td>
                            <td className="text-end">
                              <Button
                                color="info"
                                size="sm"
                                className="me-2"
                                onClick={() => handleViewDonation(donation)}
                                title="Detaylar"
                              >
                                <Eye size={14} />
                              </Button>
                              {donation.status === 'active' && (
                                <Button
                                  color="warning"
                                  size="sm"
                                  className="me-2"
                                  onClick={() => handlePause(donation.id)}
                                  title="Durdur"
                                >
                                  <Pause size={14} />
                                </Button>
                              )}
                              {donation.status === 'paused' && (
                                <Button
                                  color="success"
                                  size="sm"
                                  className="me-2"
                                  onClick={() => handleResume(donation.id)}
                                  title="Devam Ettir"
                                >
                                  <Play size={14} />
                                </Button>
                              )}
                              {(donation.status === 'active' || donation.status === 'paused') && (
                                <Button
                                  color="danger"
                                  size="sm"
                                  className="me-2"
                                  onClick={() => handleCancel(donation.id)}
                                  title="İptal Et"
                                >
                                  <XCircle size={14} />
                                </Button>
                              )}
                              <Button
                                color="danger"
                                size="sm"
                                onClick={() => handleDelete(donation.id)}
                                title="Sil"
                              >
                                <Trash2 size={14} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
                {pagination && (
                  <Pagination
                    pagination={pagination}
                    onPageChange={(page) => setCurrentPage(page)}
                  />
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* View Donation Modal */}
      <Modal isOpen={modal} toggle={() => setModal(!modal)} size="lg">
        <ModalHeader toggle={() => setModal(!modal)}>
          Düzenli Bağış Detayı
        </ModalHeader>
        <ModalBody>
          {selectedDonation && (
            <div>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Bağışçı:</strong> {selectedDonation.donor.fullName}
                </Col>
                <Col md={6}>
                  <strong>Durum:</strong> {getStatusBadge(selectedDonation.status)}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Email:</strong> {selectedDonation.donor.email}
                </Col>
                <Col md={6}>
                  <strong>Tutar:</strong> {formatCurrency(selectedDonation.amount, selectedDonation.currency)}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Periyot:</strong> {getFrequencyText(selectedDonation.frequency)}
                </Col>
                <Col md={6}>
                  <strong>Ödeme Yöntemi:</strong> {selectedDonation.paymentMethod}
                </Col>
              </Row>
              {selectedDonation.cardMask && (
                <Row className="mb-3">
                  <Col md={6}>
                    <strong>Kart:</strong> {selectedDonation.cardBrand} **** {selectedDonation.cardMask}
                  </Col>
                  <Col md={6}>
                    <strong>Gateway:</strong> {selectedDonation.paymentGateway}
                  </Col>
                </Row>
              )}
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Sonraki Ödeme:</strong> {formatDate(selectedDonation.nextPaymentDate)}
                </Col>
                <Col md={6}>
                  <strong>Son Ödeme:</strong> {formatDate(selectedDonation.lastPaymentDate)}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Yapılan Ödeme:</strong> {selectedDonation.totalPaymentsMade}
                  {selectedDonation.totalPaymentsPlanned && ` / ${selectedDonation.totalPaymentsPlanned}`}
                </Col>
                <Col md={6}>
                  <strong>Başarısız Deneme:</strong> {selectedDonation.failedAttempts}
                </Col>
              </Row>
              {selectedDonation.campaign && (
                <Row className="mb-3">
                  <Col md={12}>
                    <strong>Kampanya:</strong> {selectedDonation.campaign.title}
                  </Col>
                </Row>
              )}
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Başlangıç:</strong> {formatDate(selectedDonation.startedAt)}
                </Col>
                <Col md={6}>
                  <strong>Bitiş:</strong> {formatDate(selectedDonation.endedAt)}
                </Col>
              </Row>
              {selectedDonation.lastFailureReason && (
                <Row>
                  <Col md={12}>
                    <strong>Son Hata:</strong>
                    <div className="p-2 bg-danger text-white mt-2 rounded">
                      {selectedDonation.lastFailureReason}
                    </div>
                  </Col>
                </Row>
              )}
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          {selectedDonation && (
            <>
              {selectedDonation.status === 'active' && (
                <Button
                  color="warning"
                  onClick={() => {
                    handlePause(selectedDonation.id);
                    setModal(false);
                  }}
                >
                  Durdur
                </Button>
              )}
              {selectedDonation.status === 'paused' && (
                <Button
                  color="success"
                  onClick={() => {
                    handleResume(selectedDonation.id);
                    setModal(false);
                  }}
                >
                  Devam Ettir
                </Button>
              )}
              {(selectedDonation.status === 'active' || selectedDonation.status === 'paused') && (
                <Button
                  color="danger"
                  onClick={() => {
                    handleCancel(selectedDonation.id);
                    setModal(false);
                  }}
                >
                  İptal Et
                </Button>
              )}
            </>
          )}
          <Button color="primary" onClick={() => setModal(false)}>
            Kapat
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default RecurringDonationsPage;
