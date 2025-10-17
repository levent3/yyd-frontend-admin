import Breadcrumbs from "CommonElements/Breadcrumbs";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { Dashboard } from "utils/Constant";

const ProjectCategories = () => {
  return (
    <div className="page-body">
      <Breadcrumbs title="Proje Kategorileri" mainTitle="Kategoriler" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <h5>Proje Kategorileri</h5>
              </CardHeader>
              <CardBody>
                <p>Proje kategori yönetimi burada olacak...</p>
                <p className="text-muted">Bu sayfa yakında tamamlanacak.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectCategories;
