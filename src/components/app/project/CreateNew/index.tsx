import { Card, CardBody, Col, Container, Row } from "reactstrap";
import dynamic from "next/dynamic";

const CreateNewContainer = () => {
  const CreateNewProjectForm = dynamic(() => import("./CreateNewProjectForm"), { ssr: false });

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card>
            <CardBody>  
              <CreateNewProjectForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateNewContainer;
