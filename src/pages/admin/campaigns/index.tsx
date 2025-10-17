import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Table, Button, Badge, Spinner } from "reactstrap";
import { Dashboard } from "utils/Constant";
import donationService, { DonationCampaign } from "../../../services/donationService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { Edit, Trash2, Eye } from "react-feather";

const CampaignsPage = () => {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<DonationCampaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const response = await donationService.getAllCampaigns();
      setCampaigns(response.data);
    } catch (error: any) {
      console.error('Kampanyalar yüklenirken hata:', error);
      toast.error('Kampanyalar yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number, title: string) => {
    if (!window.confirm(`"${title}" kampanyasını silmek istediğinize emin misiniz?`)) {
      return;
    }

    try {
      await donationService.deleteCampaign(id);
      toast.success('Kampanya başarıyla silindi');
      fetchCampaigns();
    } catch (error: any) {
      console.error('Kampanya silinirken hata:', error);
      toast.error(error.response?.data?.message || 'Kampanya silinirken hata oluştu');
    }
  };

  const formatCurrency = (amount?: number) => {
    if (!amount) return '₺0';
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
    }).format(amount);
  };

  const calculateProgress = (collected?: number, target?: number) => {
    if (!target || !collected) return 0;
    return Math.min((collected / target) * 100, 100);
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
      <Breadcrumbs title="Bağış Kampanyaları" mainTitle="Kampanya Yönetimi" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Tüm Kampanyalar</h5>
                  <Button color="primary" size="sm" onClick={() => router.push('/admin/campaigns/create')}>
                    + Yeni Kampanya Ekle
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {campaigns.length === 0 ? (
                  <div className="text-center py-5">
                    <p className="text-muted">Henüz kampanya bulunmuyor.</p>
                    <Button color="primary" onClick={() => router.push('/admin/campaigns/create')}>
                      İlk Kampanyayı Oluştur
                    </Button>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead className="table-light">
                        <tr>
                          <th style={{ width: '50px' }}>#</th>
                          <th>Kampanya Adı</th>
                          <th>Kategori</th>
                          <th>Hedef</th>
                          <th>Toplanan</th>
                          <th>İlerleme</th>
                          <th>Bağış</th>
                          <th>Durum</th>
                          <th className="text-end">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {campaigns.map((campaign) => (
                          <tr key={campaign.id}>
                            <td>{campaign.id}</td>
                            <td>
                              <div>
                                <strong>{campaign.title}</strong>
                                {campaign.isFeatured && (
                                  <Badge color="warning" className="ms-2" pill>
                                    Öne Çıkan
                                  </Badge>
                                )}
                                <br />
                                <small className="text-muted">{campaign.slug}</small>
                              </div>
                            </td>
                            <td>
                              {campaign.category ? (
                                <Badge color="info">{campaign.category}</Badge>
                              ) : (
                                <span className="text-muted">-</span>
                              )}
                            </td>
                            <td>{formatCurrency(campaign.targetAmount)}</td>
                            <td>
                              <strong className="text-success">
                                {formatCurrency(campaign.collectedAmount)}
                              </strong>
                            </td>
                            <td>
                              <div className="progress" style={{ height: '20px' }}>
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{
                                    width: `${calculateProgress(campaign.collectedAmount, campaign.targetAmount)}%`,
                                  }}
                                  aria-valuenow={calculateProgress(campaign.collectedAmount, campaign.targetAmount)}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                >
                                  {calculateProgress(campaign.collectedAmount, campaign.targetAmount).toFixed(0)}%
                                </div>
                              </div>
                            </td>
                            <td>
                              <Badge color="secondary">{campaign._count?.donations || 0}</Badge>
                            </td>
                            <td>
                              {campaign.isActive ? (
                                <Badge color="success">Aktif</Badge>
                              ) : (
                                <Badge color="danger">Pasif</Badge>
                              )}
                            </td>
                            <td className="text-end">
                              <Button
                                color="secondary"
                                size="sm"
                                className="me-2"
                                onClick={() => window.open(`/campaigns/${campaign.slug}`, '_blank')}
                                title="Görüntüle"
                              >
                                <Eye size={14} />
                              </Button>
                              <Button
                                color="info"
                                size="sm"
                                className="me-2"
                                onClick={() => router.push(`/admin/campaigns/edit/${campaign.id}`)}
                              >
                                <Edit size={14} />
                              </Button>
                              <Button
                                color="danger"
                                size="sm"
                                onClick={() => handleDelete(campaign.id, campaign.title)}
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CampaignsPage;
