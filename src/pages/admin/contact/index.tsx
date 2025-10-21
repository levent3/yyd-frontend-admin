/**
 * Contact Messages Page
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

import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Table, Button, Badge, Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Dashboard } from "utils/Constant";
import { formatDate } from "utils/formatters";
import LoadingState from "../../../components/common/LoadingState";
import EmptyState from "../../../components/common/EmptyState";
import useConfirm from "../../../hooks/useConfirm";
import contactService, { ContactMessage } from "../../../services/contactService";
import { Eye, Trash2, CheckCircle } from "react-feather";
import { PaginationInfo } from '../../../types/pagination';
import Pagination from '../../../components/common/Pagination';

const ContactPage = () => {
  const confirm = useConfirm();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ status: '' });
  const [modal, setModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMessages();
  }, [filter, currentPage]);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const params: any = { page: currentPage, limit: 10 };
      if (filter.status) {
        params.status = filter.status;
      }
      const response = await contactService.getAllMessages(params);
      const { data, pagination } = response;
      setMessages(data);
      setPagination(pagination);
    } catch (error: any) {
      console.error('Mesajlar yüklenirken hata:', error);
      confirm.error('Hata!', 'Mesajlar yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleViewMessage = async (message: ContactMessage) => {
    setSelectedMessage(message);
    setModal(true);

    // Eğer mesaj yeni ise, otomatik olarak 'read' yap
    if (message.status === 'new') {
      try {
        await contactService.updateMessage(message.id, { status: 'read' });
        fetchMessages(); // Listeyi yenile
      } catch (error) {
        console.error('Mesaj durumu güncellenemedi:', error);
      }
    }
  };

  const handleUpdateStatus = async (id: number, status: 'read' | 'replied' | 'archived') => {
    try {
      await contactService.updateMessage(id, { status });
      confirm.success('Başarılı!', 'Mesaj durumu güncellendi');
      fetchMessages();
      if (modal) setModal(false);
    } catch (error: any) {
      console.error('Mesaj durumu güncellenirken hata:', error);
      confirm.error('Hata!', error.response?.data?.message || 'Mesaj durumu güncellenirken hata oluştu');
    }
  };

  const handleDelete = async (id: number) => {
    if (!(await confirm('Bu mesajı silmek istediğinizden emin misiniz?', 'Bu işlem geri alınamaz.'))) return;

    try {
      await contactService.deleteMessage(id);
      confirm.success('Başarılı!', 'Mesaj silindi');
      fetchMessages();
    } catch (error: any) {
      console.error('Mesaj silinirken hata:', error);
      confirm.error('Hata!', error.response?.data?.message || 'Mesaj silinirken hata oluştu');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge color="primary">Yeni</Badge>;
      case 'read':
        return <Badge color="info">Okundu</Badge>;
      case 'replied':
        return <Badge color="success">Yanıtlandı</Badge>;
      case 'archived':
        return <Badge color="secondary">Arşiv</Badge>;
      default:
        return <Badge color="secondary">{status}</Badge>;
    }
  };

  if (loading) {
    return <LoadingState message="Mesajlar yükleniyor..." />;
  }

  return (
    <div className="page-body">
      <Breadcrumbs title="İletişim" mainTitle="İletişim Mesajları" parent={Dashboard} />
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
                        <option value="read">Okundu</option>
                        <option value="replied">Yanıtlandı</option>
                        <option value="archived">Arşiv</option>
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
                <h5 className="mb-0">Tüm Mesajlar</h5>
              </CardHeader>
              <CardBody>
                {messages.length === 0 ? (
                  <EmptyState message="Henüz mesaj bulunmuyor" />
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead className="table-light">
                        <tr>
                          <th>İsim</th>
                          <th>Email</th>
                          <th>Konu</th>
                          <th>Durum</th>
                          <th>Tarih</th>
                          <th className="text-end">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {messages.map((message) => (
                          <tr key={message.id} style={{ fontWeight: message.status === 'new' ? 'bold' : 'normal' }}>
                            <td>{message.fullName}</td>
                            <td>
                              <a href={`mailto:${message.email}`}>{message.email}</a>
                            </td>
                            <td>{message.subject}</td>
                            <td>{getStatusBadge(message.status)}</td>
                            <td>
                              <small>{formatDate(message.submittedAt)}</small>
                            </td>
                            <td className="text-end">
                              <Button
                                color="info"
                                size="sm"
                                className="me-2"
                                onClick={() => handleViewMessage(message)}
                                title="Görüntüle"
                              >
                                <Eye size={14} />
                              </Button>
                              {message.status !== 'replied' && (
                                <Button
                                  color="success"
                                  size="sm"
                                  className="me-2"
                                  onClick={() => handleUpdateStatus(message.id, 'replied')}
                                  title="Yanıtlandı olarak işaretle"
                                >
                                  <CheckCircle size={14} />
                                </Button>
                              )}
                              <Button
                                color="danger"
                                size="sm"
                                onClick={() => handleDelete(message.id)}
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

      {/* View Message Modal */}
      <Modal isOpen={modal} toggle={() => setModal(!modal)} size="lg">
        <ModalHeader toggle={() => setModal(!modal)}>
          Mesaj Detayı
        </ModalHeader>
        <ModalBody>
          {selectedMessage && (
            <div>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>İsim:</strong> {selectedMessage.fullName}
                </Col>
                <Col md={6}>
                  <strong>Durum:</strong> {getStatusBadge(selectedMessage.status)}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Email:</strong> <a href={`mailto:${selectedMessage.email}`}>{selectedMessage.email}</a>
                </Col>
                <Col md={6}>
                  <strong>Telefon:</strong> {selectedMessage.phoneNumber || '-'}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <strong>Konu:</strong> {selectedMessage.subject}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={12}>
                  <strong>Tarih:</strong> {formatDate(selectedMessage.submittedAt)}
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <strong>Mesaj:</strong>
                  <div className="p-3 bg-light mt-2 rounded" style={{ whiteSpace: 'pre-wrap' }}>
                    {selectedMessage.message}
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          {selectedMessage && selectedMessage.status !== 'archived' && (
            <Button
              color="secondary"
              onClick={() => handleUpdateStatus(selectedMessage.id, 'archived')}
            >
              Arşivle
            </Button>
          )}
          {selectedMessage && selectedMessage.status !== 'replied' && (
            <Button
              color="success"
              onClick={() => handleUpdateStatus(selectedMessage.id, 'replied')}
            >
              Yanıtlandı Olarak İşaretle
            </Button>
          )}
          <Button color="primary" onClick={() => setModal(false)}>
            Kapat
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ContactPage;
