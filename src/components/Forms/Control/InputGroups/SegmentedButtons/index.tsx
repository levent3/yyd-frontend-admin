import { Card, Col } from "reactstrap";
import { segmentedButtonsHeadingData } from "Data/Forms/Control";
import { SegmentedButtonsHeading } from "utils/Constant";
import CardHead from "CommonElements/CardHead";
import SegmentedButtonsCardBody from "./SegmentedButtonsCardBody";

const SegmentedButtons = () => {
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CardHead title={SegmentedButtonsHeading} subTitle={segmentedButtonsHeadingData} />
        <SegmentedButtonsCardBody />
      </Card>
    </Col>
  );
};

export default SegmentedButtons;
