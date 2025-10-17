import { Card, Col, Container, Row, CardBody } from "reactstrap";
import TicketList from "./TicketList";
import TicketTable from "./TicketTable";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { SupportTicket, SupportTicketSpan } from "utils/Constant";

const SupportTicketContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card>
            <CommonCardHeading smallHeading={SupportTicket} span={SupportTicketSpan}/>
            <CardBody>
              <TicketList />
              <TicketTable />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SupportTicketContainer;
