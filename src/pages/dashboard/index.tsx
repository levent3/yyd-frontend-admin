import Breadcrumbs from "CommonElements/Breadcrumbs";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { Dashboard } from "utils/Constant";
import { useAuth } from "../../context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();

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
                  YYD Yönetim Paneline hoş geldiniz. Yan menüden erişim izniniz olan bölümleri görebilirsiniz.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* İstatistik Kartları */}
        <Row>
          <Col xl={3} sm={6}>
            <Card className="o-hidden">
              <CardBody className="b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <i className="icon-briefcase font-primary fa-3x"></i>
                  </div>
                  <div className="media-body">
                    <span className="m-0">Projeler</span>
                    <h4 className="mb-0">
                      <i className="icon-briefcase icon-bg"></i>
                    </h4>
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
                    <i className="icon-user font-success fa-3x"></i>
                  </div>
                  <div className="media-body">
                    <span className="m-0">Kullanıcılar</span>
                    <h4 className="mb-0">
                      <i className="icon-user icon-bg"></i>
                    </h4>
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
                    <i className="icon-shield font-warning fa-3x"></i>
                  </div>
                  <div className="media-body">
                    <span className="m-0">Roller</span>
                    <h4 className="mb-0">
                      <i className="icon-shield icon-bg"></i>
                    </h4>
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
                    <i className="icon-check font-danger fa-3x"></i>
                  </div>
                  <div className="media-body">
                    <span className="m-0">Aktif</span>
                    <h4 className="mb-0">
                      <i className="icon-check icon-bg"></i>
                    </h4>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Bilgi Kartları */}
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <h5>Hızlı Erişim</h5>
              </CardHeader>
              <CardBody>
                <p>
                  Yan menüden ihtiyacınız olan bölümlere hızlıca erişebilirsiniz.
                  Rolünüze göre erişim izniniz olan sayfalar otomatik olarak gösterilmektedir.
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col lg={6}>
            <Card>
              <CardHeader>
                <h5>Yetkilendirme Sistemi</h5>
              </CardHeader>
              <CardBody>
                <p>
                  Sistem, rol bazlı erişim kontrolü (RBAC) kullanmaktadır.
                  Her kullanıcı, atanmış rolüne göre farklı izinlere sahiptir.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardPage;
