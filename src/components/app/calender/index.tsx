import { Card, Col, Container, Row, CardBody } from "reactstrap";
import DragCalendar from "./DragCalendar";

const CalenderContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card className="calendar-default">
            <CardBody>
              <Row>
                <DragCalendar />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CalenderContainer;
