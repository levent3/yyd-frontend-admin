import Breadcrumbs from "CommonElements/Breadcrumbs";
import React from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { Dashboard } from "utils/Constant";

const ProjectArchive = () => {
  return (
    <div className="page-body">
      <Breadcrumbs title="Proje Arşivi" mainTitle="Arşiv" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <h5>Arşivlenmiş Projeler</h5>
              </CardHeader>
              <CardBody>
                <p>Arşivlenmiş projeler burada listelenecek...</p>
                <p className="text-muted">Bu sayfa yakında tamamlanacak.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectArchive;
