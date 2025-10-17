import Breadcrumbs from "CommonElements/Breadcrumbs";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { Dashboard } from "utils/Constant";

const UserActivity = () => {
  return (
    <div className="page-body">
      <Breadcrumbs title="Kullanıcı Aktiviteleri" mainTitle="Aktivite Logları" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <h5>Kullanıcı Aktivite Logları</h5>
              </CardHeader>
              <CardBody>
                <p>Kullanıcı aktivite logları burada listelenecek...</p>
                <p className="text-muted">Bu sayfa yakında tamamlanacak.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserActivity;
