import Breadcrumbs from "CommonElements/Breadcrumbs";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { Dashboard } from "utils/Constant";

const RolePermissions = () => {
  return (
    <div className="page-body">
      <Breadcrumbs title="İzin Yönetimi" mainTitle="İzinler" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <h5>Rol İzinleri</h5>
              </CardHeader>
              <CardBody>
                <p>İzin yönetimi burada olacak...</p>
                <p className="text-muted">Bu sayfa yakında tamamlanacak.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RolePermissions;
