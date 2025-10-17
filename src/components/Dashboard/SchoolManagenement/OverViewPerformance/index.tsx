import { Card, Col } from "reactstrap";
import OverViewPerformanceCardHeader from "./OverViewPerformanceCardHeader";
import OverViewPerformanceCardBody from "./OverViewPerformanceCardBody";

const OverViewPerformance = () => {
  return (
    <Col xl={8} xs={12} className="order-1 order-xl-0 box-col-7">
      <Card className="height-equal" style={{ minHeight: "444.469px" }}>
        <OverViewPerformanceCardHeader />
        <OverViewPerformanceCardBody />
      </Card>
    </Col>
  );
};

export default OverViewPerformance;
