import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Table, Button, Badge, Spinner, Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Dashboard } from "utils/Constant";
import withPermission from "../../../../helper/WithPermission";
import paymentTransactionService, { PaymentTransaction, PaymentStatistics } from "../../../services/paymentTransactionService";
import { toast } from "react-toastify";
import { Eye, RefreshCw, DollarSign, CheckCircle, XCircle, Clock } from "react-feather";
import { PaginationInfo } from '../../../types/pagination';
import Pagination from '../../../components/common/Pagination';

const PaymentTransactionsPage = () => {
  const [transactions, setTransactions] = useState<PaymentTransaction[]>([]);
  const [statistics, setStatistics] = useState<PaymentStatistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ status: '', paymentGateway: '' });
  const [modal, setModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<PaymentTransaction | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchTransactions();
    fetchStatistics();
  }, [filter, currentPage]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const params: any = { page: currentPage, limit: 10 };
      if (filter.status) params.status = filter.status;
      if (filter.paymentGateway) params.paymentGateway = filter.paymentGateway;

      const response = await paymentTransactionService.getAllTransactions(params);
      const { data, pagination } = response;
      setTransactions(data);
      setPagination(pagination);
    } catch (error: any) {
      console.error('İşlemler yüklenirken hata:', error);
      toast.error('İşlemler yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const fetchStatistics = async () => {
    try {
      const stats = await paymentTransactionService.getStatistics();
      setStatistics(stats);
    } catch (error: any) {
      console.error('İstatistikler yüklenirken hata:', error);
    }
  };

  const handleViewTransaction = async (transaction: PaymentTransaction) => {
    setSelectedTransaction(transaction);
    setModal(true);
  };

  const handleRetry = async (id: string) => {
    if (!confirm('Bu işlemi yeniden denemek istediğinizden emin misiniz?')) return;

    try {
      await paymentTransactionService.retryTransaction(id);
      toast.success('İşlem yeniden denenecek');
      fetchTransactions();
    } catch (error: any) {
      console.error('Hata:', error);
      toast.error(error.response?.data?.message || 'İşlem başarısız');
    }
  };

  const formatDate = (date: string | undefined) => {
    if (!date) return '-';
    return new Date(date).toLocaleString('tr-TR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge color="success">Başarılı</Badge>;
      case 'pending':
        return <Badge color="warning">Bekliyor</Badge>;
      case 'failed':
        return <Badge color="danger">Başarısız</Badge>;
      default:
        return <Badge color="secondary">{status}</Badge>;
    }
  };

  const getGatewayBadge = (gateway: string) => {
    const colors: any = {
      iyzico: 'info',
      paytr: 'primary',
      stripe: 'purple'
    };
    return <Badge color={colors[gateway] || 'secondary'}>{gateway.toUpperCase()}</Badge>;
  };

  if (loading && !statistics) {
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
      <Breadcrumbs title="Ödeme İşlemleri" mainTitle="Ödeme İşlemleri Yönetimi" parent={Dashboard} />
      <Container fluid={true}>
        {/* İstatistik Kartları */}
        {statistics && (
          <Row className="mb-3">
            <Col lg={3} md={6}>
              <Card className="o-hidden">
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <DollarSign className="text-primary" size={40} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-0">Toplam İşlem</h6>
                      <h4 className="mb-0">{statistics.totalTransactions}</h4>
                      <small className="text-muted">{formatCurrency(statistics.totalAmount, 'TRY')}</small>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="o-hidden">
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <CheckCircle className="text-success" size={40} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-0">Başarılı</h6>
                      <h4 className="mb-0">{statistics.successfulTransactions}</h4>
                      <small className="text-success">%{statistics.successRate.toFixed(1)} başarı oranı</small>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="o-hidden">
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <XCircle className="text-danger" size={40} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-0">Başarısız</h6>
                      <h4 className="mb-0">{statistics.failedTransactions}</h4>
                      <small className="text-muted">{formatCurrency(statistics.failedAmount, 'TRY')}</small>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={3} md={6}>
              <Card className="o-hidden">
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <Clock className="text-warning" size={40} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-0">Bekleyen</h6>
                      <h4 className="mb-0">{statistics.pendingTransactions}</h4>
                      <small className="text-muted">Ortalama: {formatCurrency(statistics.averageAmount, 'TRY')}</small>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}

        {/* Filtreler */}
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
                        <option value="success">Başarılı</option>
                        <option value="pending">Bekliyor</option>
                        <option value="failed">Başarısız</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="gatewayFilter">Ödeme Gateway</Label>
                      <Input
                        type="select"
                        id="gatewayFilter"
                        value={filter.paymentGateway}
                        onChange={(e) => setFilter({ ...filter, paymentGateway: e.target.value })}
                      >
                        <option value="">Tümü</option>
                        <option value="iyzico">iyzico</option>
                        <option value="paytr">PayTR</option>
                        <option value="stripe">Stripe</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* İşlemler Tablosu */}
        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <h5 className="mb-0">Tüm İşlemler</h5>
              </CardHeader>
              <CardBody>
                {loading ? (
                  <div className="text-center py-5">
                    <Spinner color="primary" />
                  </div>
                ) : transactions.length === 0 ? (
                  <div className="text-center py-5">
                    <p className="text-muted">Henüz işlem bulunmuyor.</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead className="table-light">
                        <tr>
                          <th>ID</th>
                          <th>Tutar</th>
                          <th>Gateway</th>
                          <th>Durum</th>
                          <th>3D Secure</th>
                          <th>Deneme</th>
                          <th>Tarih</th>
                          <th className="text-end">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.map((transaction) => (
                          <tr key={transaction.id}>
                            <td>
                              <small className="text-muted">{transaction.id.slice(0, 8)}...</small>
                            </td>
                            <td>
                              <strong>{formatCurrency(transaction.amount, transaction.currency)}</strong>
                            </td>
                            <td>{getGatewayBadge(transaction.paymentGateway)}</td>
                            <td>{getStatusBadge(transaction.status)}</td>
                            <td>
                              {transaction.threeDSecure ? (
                                <Badge color="success">Evet</Badge>
                              ) : (
                                <Badge color="secondary">Hayır</Badge>
                              )}
                            </td>
                            <td>
                              <span className={transaction.attemptNumber > 1 ? 'text-warning' : ''}>
                                {transaction.attemptNumber}
                              </span>
                            </td>
                            <td>
                              <small>{formatDate(transaction.createdAt)}</small>
                            </td>
                            <td className="text-end">
                              <Button
                                color="info"
                                size="sm"
                                className="me-2"
                                onClick={() => handleViewTransaction(transaction)}
                                title="Detaylar"
                              >
                                <Eye size={14} />
                              </Button>
                              {transaction.status === 'failed' && transaction.retryable && (
                                <Button
                                  color="warning"
                                  size="sm"
                                  onClick={() => handleRetry(transaction.id)}
                                  title="Yeniden Dene"
                                >
                                  <RefreshCw size={14} />
                                </Button>
                              )}
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

      {/* Detay Modal */}
      <Modal isOpen={modal} toggle={() => setModal(!modal)} size="lg">
        <ModalHeader toggle={() => setModal(!modal)}>
          İşlem Detayı
        </ModalHeader>
        <ModalBody>
          {selectedTransaction && (
            <div>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>İşlem ID:</strong> {selectedTransaction.id}
                </Col>
                <Col md={6}>
                  <strong>Durum:</strong> {getStatusBadge(selectedTransaction.status)}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Tutar:</strong> {formatCurrency(selectedTransaction.amount, selectedTransaction.currency)}
                </Col>
                <Col md={6}>
                  <strong>Gateway:</strong> {getGatewayBadge(selectedTransaction.paymentGateway)}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Gateway Transaction ID:</strong> {selectedTransaction.gatewayTransactionId || '-'}
                </Col>
                <Col md={6}>
                  <strong>3D Secure:</strong> {selectedTransaction.threeDSecure ? 'Evet' : 'Hayır'}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Deneme Sayısı:</strong> {selectedTransaction.attemptNumber}
                </Col>
                <Col md={6}>
                  <strong>Yeniden Denenebilir:</strong> {selectedTransaction.retryable ? 'Evet' : 'Hayır'}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Oluşturulma:</strong> {formatDate(selectedTransaction.createdAt)}
                </Col>
                <Col md={6}>
                  <strong>İşlenme:</strong> {formatDate(selectedTransaction.processedAt)}
                </Col>
              </Row>
              {selectedTransaction.gatewayErrorCode && (
                <Row className="mb-3">
                  <Col md={12}>
                    <strong>Hata Kodu:</strong> {selectedTransaction.gatewayErrorCode}
                  </Col>
                </Row>
              )}
              {selectedTransaction.gatewayErrorMessage && (
                <Row className="mb-3">
                  <Col md={12}>
                    <strong>Hata Mesajı:</strong>
                    <div className="p-2 bg-danger text-white mt-2 rounded">
                      {selectedTransaction.gatewayErrorMessage}
                    </div>
                  </Col>
                </Row>
              )}
              {selectedTransaction.ipAddress && (
                <Row className="mb-3">
                  <Col md={6}>
                    <strong>IP Adresi:</strong> {selectedTransaction.ipAddress}
                  </Col>
                </Row>
              )}
              {selectedTransaction.gatewayResponse && (
                <Row>
                  <Col md={12}>
                    <strong>Gateway Yanıtı:</strong>
                    <pre className="p-2 bg-light mt-2 rounded" style={{ maxHeight: '200px', overflow: 'auto' }}>
                      {JSON.stringify(selectedTransaction.gatewayResponse, null, 2)}
                    </pre>
                  </Col>
                </Row>
              )}
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          {selectedTransaction && selectedTransaction.status === 'failed' && selectedTransaction.retryable && (
            <Button
              color="warning"
              onClick={() => {
                handleRetry(selectedTransaction.id);
                setModal(false);
              }}
            >
              Yeniden Dene
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

export default withPermission(PaymentTransactionsPage, {
  moduleKey: 'payment-transactions',
  action: 'read'
});
