import CardHead from "CommonElements/CardHead";
import { Card, Col } from "reactstrap";
import { ReactstrapCalendarHeading } from "utils/Constant";
import ReactStrapCalendarCardBody from "./ReactStrapCalendarCardBody";

const ReactStrapCalendar = () => {
  return (
    <Col xl={6}>
      <Card>
        <CardHead title={ReactstrapCalendarHeading} />
        <ReactStrapCalendarCardBody />
      </Card>
    </Col>
  );
};

export default ReactStrapCalendar;
