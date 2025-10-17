import { Col, Row } from "reactstrap";
import ProgressCards from "./ProgressCards";
import UpgradePlan from "./UpgradePlan";

const EthReportCard = () => {
  return (
    <Col xxl={3} xl={4} className="box-col-12">
      <Row>
        <ProgressCards />
        <UpgradePlan />
      </Row>
    </Col>
  );
};

export default EthReportCard;
