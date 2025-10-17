import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Table, Button, Badge, Spinner, Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Dashboard } from "utils/Constant";
import careerService, { CareerApplication } from "../../../services/careerService";
import { toast } from "react-toastify";
import { Eye, Trash2, Download, CheckCircle, XCircle } from "react-feather";
import { PaginationInfo } from '../../../types/pagination';
import Pagination from '../../../components/common/Pagination';

const CareersPage = () => {
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ status: '' });
  const [modal, setModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<CareerApplication | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchApplications();
  }, [filter, currentPage]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const params: any = { page: currentPage, limit: 10 };
      if (filter.status) {
        params.status = filter.status;
      }
      const response = await careerService.getAllApplications(params);
      const { data, pagination } = response;
      setApplications(data);
      setPagination(pagination);
    } catch (error: any) {
      console.error('Başvurular yüklenirken hata:', error);
      toast.error('Başvurular yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleViewApplication = async (application: CareerApplication) => {
    setSelectedApplication(application);
    setModal(true);

    // Eğer başvuru yeni ise, otomatik olarak 'reviewing' yap
    if (application.status === 'new') {
      try {
        await careerService.updateApplication(application.id, { status: 'reviewing' });
        fetchApplications();
      } catch (error) {
        console.error('Başvuru durumu güncellenemedi:', error);
      }
    }
  };

  const handleUpdateStatus = async (id: number, status: 'reviewing' | 'interviewed' | 'accepted' | 'rejected') => {
    try {
      await careerService.updateApplication(id, { status });
      toast.success('Başvuru durumu güncellendi');
      fetchApplications();
      if (modal) setModal(false);
    } catch (error: any) {
      console.error('Başvuru durumu güncellenirken hata:', error);
      toast.error(error.response?.data?.message || 'Başvuru durumu güncellenirken hata oluştu');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bu başvuruyu silmek istediğinizden emin misiniz?')) return;

    try {
      await careerService.deleteApplication(id);
      toast.success('Başvuru silindi');
      fetchApplications();
    } catch (error: any) {
      console.error('Başvuru silinirken hata:', error);
      toast.error(error.response?.data?.message || 'Başvuru silinirken hata oluştu');
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('tr-TR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge color="primary">Yeni</Badge>;
      case 'reviewing':
        return <Badge color="info">İnceleniyor</Badge>;
      case 'interviewed':
        return <Badge color="warning">Mülakata Çağrıldı</Badge>;
      case 'accepted':
        return <Badge color="success">Kabul Edildi</Badge>;
      case 'rejected':
        return <Badge color="danger">Reddedildi</Badge>;
      default:
        return <Badge color="secondary">{status}</Badge>;
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
      <Breadcrumbs title="Kariyer" mainTitle="Kariyer Başvuruları" parent={Dashboard} />
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
                        onChange={(e) => setFilter({ status: e.target.value })}
                      >
                        <option value="">Tümü</option>
                        <option value="new">Yeni</option>
                        <option value="reviewing">İnceleniyor</option>
                        <option value="interviewed">Mülakat</option>
                        <option value="accepted">Kabul</option>
                        <option value="rejected">Red</option>
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
                <h5 className="mb-0">Tüm Başvurular</h5>
              </CardHeader>
              <CardBody>
                {applications.length === 0 ? (
                  <div className="text-center py-5">
                    <p className="text-muted">Henüz başvuru bulunmuyor.</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead className="table-light">
                        <tr>
                          <th>İsim</th>
                          <th>Email</th>
                          <th>Pozisyon</th>
                          <th>Durum</th>
                          <th>Tarih</th>
                          <th className="text-end">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((application) => (
                          <tr key={application.id} style={{ fontWeight: application.status === 'new' ? 'bold' : 'normal' }}>
                            <td>{application.fullName}</td>
                            <td>
                              <a href={`mailto:${application.email}`}>{application.email}</a>
                            </td>
                            <td>{application.position || '-'}</td>
                            <td>{getStatusBadge(application.status)}</td>
                            <td>
                              <small>{formatDate(application.submittedAt)}</small>
                            </td>
                            <td className="text-end">
                              <Button
                                color="info"
                                size="sm"
                                className="me-2"
                                onClick={() => handleViewApplication(application)}
                                title="Görüntüle"
                              >
                                <Eye size={14} />
                              </Button>
                              <Button
                                color="primary"
                                size="sm"
                                className="me-2"
                                onClick={() => window.open(application.cvUrl, '_blank')}
                                title="CV İndir"
                              >
                                <Download size={14} />
                              </Button>
                              {application.status !== 'accepted' && application.status !== 'rejected' && (
                                <>
                                  <Button
                                    color="success"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleUpdateStatus(application.id, 'accepted')}
                                    title="Kabul Et"
                                  >
                                    <CheckCircle size={14} />
                                  </Button>
                                  <Button
                                    color="danger"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleUpdateStatus(application.id, 'rejected')}
                                    title="Reddet"
                                  >
                                    <XCircle size={14} />
                                  </Button>
                                </>
                              )}
                              <Button
                                color="danger"
                                size="sm"
                                onClick={() => handleDelete(application.id)}
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

      {/* View Application Modal */}
      <Modal isOpen={modal} toggle={() => setModal(!modal)} size="lg">
        <ModalHeader toggle={() => setModal(!modal)}>
          Başvuru Detayı
        </ModalHeader>
        <ModalBody>
          {selectedApplication && (
            <div>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>İsim:</strong> {selectedApplication.fullName}
                </Col>
                <Col md={6}>
                  <strong>Durum:</strong> {getStatusBadge(selectedApplication.status)}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Email:</strong> <a href={`mailto:${selectedApplication.email}`}>{selectedApplication.email}</a>
                </Col>
                <Col md={6}>
                  <strong>Telefon:</strong> {selectedApplication.phoneNumber || '-'}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Pozisyon:</strong> {selectedApplication.position || '-'}
                </Col>
                <Col md={6}>
                  <strong>Tarih:</strong> {formatDate(selectedApplication.submittedAt)}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <strong>CV:</strong>
                  <div className="mt-2">
                    <Button
                      color="primary"
                      size="sm"
                      onClick={() => window.open(selectedApplication.cvUrl, '_blank')}
                    >
                      <Download size={14} className="me-2" />
                      CV'yi İndir/Görüntüle
                    </Button>
                  </div>
                </Col>
              </Row>
              {selectedApplication.coverLetter && (
                <Row>
                  <Col md={12}>
                    <strong>Ön Yazı:</strong>
                    <div className="p-3 bg-light mt-2 rounded" style={{ whiteSpace: 'pre-wrap' }}>
                      {selectedApplication.coverLetter}
                    </div>
                  </Col>
                </Row>
              )}
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          {selectedApplication && selectedApplication.status !== 'accepted' && selectedApplication.status !== 'rejected' && (
            <>
              <Button
                color="warning"
                onClick={() => handleUpdateStatus(selectedApplication.id, 'interviewed')}
              >
                Mülakata Çağır
              </Button>
              <Button
                color="success"
                onClick={() => handleUpdateStatus(selectedApplication.id, 'accepted')}
              >
                Kabul Et
              </Button>
              <Button
                color="danger"
                onClick={() => handleUpdateStatus(selectedApplication.id, 'rejected')}
              >
                Reddet
              </Button>
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

export default CareersPage;
