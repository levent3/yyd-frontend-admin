import { Row, Col, Card, CardBody } from "reactstrap";
import CountUp from "react-countup";
import ProfitAndLoss from "./ProfitAndLoss";
import { ticketData } from "Data/SupportTicket";

const TicketList = () => {
  return (
    <Row>
      {ticketData.map((item, index) => (
        <Col xl={4} sm={6} key={index}>
          <Card className="ecommerce-widget pro-gress">
            <CardBody className="support-ticket-font support-ticket-card">
              <Row>
                <Col xs={5}>
                  <span>{item.title}</span>
                  <h4 className="total-num counter">
                    <CountUp end={item.num} className="text-dark" />
                  </h4>
                </Col>
                <ProfitAndLoss />
              </Row>
              <div className="progress-showcase">
                <div className="progress sm-progress-bar">
                  <div className={item.class} style={{ width: "70%" }}></div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default TicketList;
