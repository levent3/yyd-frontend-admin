import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Table, Button, Badge, Spinner, Input, FormGroup, Label } from "reactstrap";
import { Dashboard } from "utils/Constant";
import donationService, { Donation } from "../../../services/donationService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { Eye, Check, X } from "react-feather";

const DonationsPage = () => {
  const router = useRouter();
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    status: '',
    paymentMethod: ''
  });

  useEffect(() => {
    fetchDonations();
  }, [filter]);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      const response = await donationService.getAllDonations(filter);
      setDonations(response.data);
    } catch (error: any) {
      console.error('Bağışlar yüklenirken hata:', error);
      toast.error('Bağışlar yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      await donationService.updateDonation(id, {
        paymentStatus: status,
        completedAt: status === 'completed' ? new Date().toISOString() : undefined
      } as any);
      toast.success('Bağış durumu güncellendi');
      fetchDonations();
    } catch (error: any) {
      console.error('Bağış güncellenirken hata:', error);
      toast.error(error.response?.data?.message || 'Bağış güncellenirken hata oluştu');
    }
  };

  const formatCurrency = (amount: number, currency: string = 'TRY') => {
    const symbol = currency === 'TRY' ? '₺' : currency === 'USD' ? '$' : '€';
    return `${symbol}${amount.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}`;
  };

  const formatDate = (date: string) => {
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
      case 'completed':
        return <Badge color="success">Tamamlandı</Badge>;
      case 'pending':
        return <Badge color="warning">Bekliyor</Badge>;
      case 'failed':
        return <Badge color="danger">Başarısız</Badge>;
      case 'refunded':
        return <Badge color="secondary">İade Edildi</Badge>;
      default:
        return <Badge color="secondary">{status}</Badge>;
    }
  };

  const getPaymentMethodName = (method: string) => {
    const methods: { [key: string]: string } = {
      credit_card: 'Kredi Kartı',
      bank_transfer: 'Banka Havalesi',
      cash: 'Nakit',
      eft: 'EFT'
    };
    return methods[method] || method;
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
      <Breadcrumbs title="Bağışlar" mainTitle="Bağış Yönetimi" parent={Dashboard} />
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
                        <option value="pending">Bekliyor</option>
                        <option value="completed">Tamamlandı</option>
                        <option value="failed">Başarısız</option>
                        <option value="refunded">İade Edildi</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="paymentMethodFilter">Ödeme Yöntemi</Label>
                      <Input
                        type="select"
                        id="paymentMethodFilter"
                        value={filter.paymentMethod}
                        onChange={(e) => setFilter({ ...filter, paymentMethod: e.target.value })}
                      >
                        <option value="">Tümü</option>
                        <option value="credit_card">Kredi Kartı</option>
                        <option value="bank_transfer">Banka Havalesi</option>
                        <option value="eft">EFT</option>
                        <option value="cash">Nakit</option>
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
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Tüm Bağışlar</h5>
                  <div>
                    <span className="text-muted">Toplam: {donations.length} bağış</span>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                {donations.length === 0 ? (
                  <div className="text-center py-5">
                    <p className="text-muted">Henüz bağış bulunmuyor.</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead className="table-light">
                        <tr>
                          <th style={{ width: '100px' }}>ID</th>
                          <th>Bağışçı</th>
                          <th>Kampanya</th>
                          <th>Tutar</th>
                          <th>Yöntem</th>
                          <th>Durum</th>
                          <th>Tarih</th>
                          <th className="text-end">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {donations.map((donation) => (
                          <tr key={donation.id}>
                            <td>
                              <small className="text-muted">{donation.id.slice(0, 8)}...</small>
                            </td>
                            <td>
                              {donation.isAnonymous ? (
                                <span className="text-muted">Anonim</span>
                              ) : (
                                <div>
                                  <strong>{donation.donorName || donation.donor?.fullName || '-'}</strong>
                                  <br />
                                  <small className="text-muted">{donation.donorEmail || donation.donor?.email || '-'}</small>
                                </div>
                              )}
                            </td>
                            <td>
                              {donation.campaign ? (
                                <span>{donation.campaign.title}</span>
                              ) : (
                                <span className="text-muted">Genel Bağış</span>
                              )}
                            </td>
                            <td>
                              <strong className="text-success">
                                {formatCurrency(donation.amount, donation.currency)}
                              </strong>
                            </td>
                            <td>
                              <Badge color="info">{getPaymentMethodName(donation.paymentMethod)}</Badge>
                            </td>
                            <td>{getStatusBadge(donation.paymentStatus)}</td>
                            <td>
                              <small>{formatDate(donation.createdAt)}</small>
                            </td>
                            <td className="text-end">
                              {donation.paymentStatus === 'pending' && (
                                <>
                                  <Button
                                    color="success"
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleUpdateStatus(donation.id, 'completed')}
                                    title="Onayla"
                                  >
                                    <Check size={14} />
                                  </Button>
                                  <Button
                                    color="danger"
                                    size="sm"
                                    onClick={() => handleUpdateStatus(donation.id, 'failed')}
                                    title="Reddet"
                                  >
                                    <X size={14} />
                                  </Button>
                                </>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
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

export default DonationsPage;
