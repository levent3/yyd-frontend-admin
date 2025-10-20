import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Spinner } from "reactstrap";
import { Dashboard } from "utils/Constant";
import { useAuth } from "../../context/AuthContext";
import dashboardService, { GlobalStatistics, RecentActivity } from "../../services/dashboardService";
import { Heart, TrendingUp, Users, Briefcase, UserCheck, Mail } from "react-feather";

const DashboardPage = () => {
  const { user } = useAuth();
  const [statistics, setStatistics] = useState<GlobalStatistics | null>(null);
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [stats, activities] = await Promise.all([
        dashboardService.getStatistics(),
        dashboardService.getRecentActivities(10),
      ]);
      setStatistics(stats);
      setRecentActivities(activities);
    } catch (error) {
      console.error('Dashboard verisi yüklenirken hata:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat('tr-TR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(dateString));
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'donation':
        return <Heart size={16} className="text-primary" />;
      case 'volunteer':
        return <UserCheck size={16} className="text-success" />;
      case 'contact':
        return <Mail size={16} className="text-info" />;
      default:
        return <Users size={16} />;
    }
  };

  if (loading) {
    return (
      <div className="page-body">
        <Breadcrumbs title="Dashboard" mainTitle="Dashboard" parent={Dashboard} />
        <Container fluid={true}>
          <div className="text-center py-5">
            <Spinner color="primary" />
            <p className="mt-3">Yükleniyor...</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="page-body">
      <Breadcrumbs title="Dashboard" mainTitle="Dashboard" parent={Dashboard} />
      <Container fluid={true}>
        {/* Hoş Geldin Mesajı */}
        <Row>
          <Col sm={12}>
            <Card className="bg-primary">
              <CardBody>
                <h3 className="text-white mb-2">
                  Hoş Geldiniz, {user?.fullName || user?.username}!
                </h3>
                <p className="text-white mb-0">
                  YYD Yönetim Paneline hoş geldiniz. Aşağıda sistemin genel istatistiklerini görebilirsiniz.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* İstatistik Kartları - İlk Satır */}
        <Row>
          <Col xl={3} sm={6}>
            <Card className="o-hidden">
              <CardBody className="b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <Heart className="font-primary" size={48} />
                  </div>
                  <div className="media-body">
                    <span className="m-0">Toplam Bağış</span>
                    <h4 className="mb-0 counter">
                      {statistics?.donations.totalCount || 0}
                    </h4>
                    <small className="text-muted">
                      {formatCurrency(statistics?.donations.totalAmount || 0)}
                    </small>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl={3} sm={6}>
            <Card className="o-hidden">
              <CardBody className="b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <TrendingUp className="font-success" size={48} />
                  </div>
                  <div className="media-body">
                    <span className="m-0">Kampanyalar</span>
                    <h4 className="mb-0 counter">
                      {statistics?.campaigns.totalCount || 0}
                    </h4>
                    <small className="text-muted">
                      {statistics?.campaigns.activeCount || 0} aktif
                    </small>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl={3} sm={6}>
            <Card className="o-hidden">
              <CardBody className="b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <Users className="font-warning" size={48} />
                  </div>
                  <div className="media-body">
                    <span className="m-0">Bağışçılar</span>
                    <h4 className="mb-0 counter">
                      {statistics?.donors.totalCount || 0}
                    </h4>
                    <small className="text-muted">
                      +{statistics?.donors.monthlyNewCount || 0} bu ay
                    </small>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl={3} sm={6}>
            <Card className="o-hidden">
              <CardBody className="b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <Briefcase className="font-info" size={48} />
                  </div>
                  <div className="media-body">
                    <span className="m-0">Projeler</span>
                    <h4 className="mb-0 counter">
                      {statistics?.projects.totalCount || 0}
                    </h4>
                    <small className="text-muted">
                      {statistics?.projects.activeCount || 0} aktif
                    </small>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* İstatistik Kartları - İkinci Satır */}
        <Row>
          <Col xl={4} sm={6}>
            <Card className="o-hidden">
              <CardBody className="b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <UserCheck className="font-success" size={48} />
                  </div>
                  <div className="media-body">
                    <span className="m-0">Gönüllüler</span>
                    <h4 className="mb-0 counter">
                      {statistics?.volunteers.totalCount || 0}
                    </h4>
                    <small className="text-muted">
                      {statistics?.volunteers.pendingCount || 0} beklemede
                    </small>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl={4} sm={6}>
            <Card className="o-hidden">
              <CardBody className="b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <Mail className="font-primary" size={48} />
                  </div>
                  <div className="media-body">
                    <span className="m-0">Mesajlar</span>
                    <h4 className="mb-0 counter">
                      {statistics?.contacts.totalCount || 0}
                    </h4>
                    <small className="text-muted">
                      {statistics?.contacts.unreadCount || 0} okunmamış
                    </small>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl={4} sm={6}>
            <Card className="o-hidden bg-success">
              <CardBody className="b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <Heart className="text-white" size={48} />
                  </div>
                  <div className="media-body">
                    <span className="m-0 text-white">Tamamlanan Bağışlar</span>
                    <h4 className="mb-0 counter text-white">
                      {formatCurrency(statistics?.donations.completedAmount || 0)}
                    </h4>
                    <small className="text-white-50">
                      {statistics?.donations.completedCount || 0} başarılı işlem
                    </small>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Son Aktiviteler */}
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <h5>Son Aktiviteler</h5>
              </CardHeader>
              <CardBody>
                {recentActivities.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th width="50"></th>
                          <th>Başlık</th>
                          <th>Açıklama</th>
                          <th>Kampanya/Konu</th>
                          <th>Tarih</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentActivities.map((activity, index) => (
                          <tr key={`${activity.type}-${activity.id}-${index}`}>
                            <td className="text-center">
                              {getActivityIcon(activity.type)}
                            </td>
                            <td>
                              <strong>{activity.title}</strong>
                            </td>
                            <td>{activity.description}</td>
                            <td>
                              {activity.campaign && (
                                <span className="badge badge-primary">
                                  {activity.campaign}
                                </span>
                              )}
                              {activity.subject && (
                                <span className="badge badge-info">
                                  {activity.subject}
                                </span>
                              )}
                            </td>
                            <td>
                              <small className="text-muted">
                                {formatDate(activity.timestamp)}
                              </small>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted text-center py-4">
                    Henüz aktivite bulunmamaktadır.
                  </p>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardPage;
