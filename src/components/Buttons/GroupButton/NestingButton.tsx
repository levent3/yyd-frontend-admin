import { Card, CardBody, Col } from "reactstrap";
import { Nesting, NestingButtonSpan } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import NormalButtonGroups from "./NormalButtonGroups";
import ButtonGroups from "./ButtonGroups";
import LargeButtonGroups from "./LargeButtonGroups";

const NestingButton = () => {
  return (
    <Col md={6}>
      <Card className="height-equal" style={{ minHeight: "411px" }}>
        <CommonCardHeading smallHeading={Nesting} span={NestingButtonSpan} />
        <CardBody className="btn-group-wrapper">
          <NormalButtonGroups />
          <ButtonGroups />
          <LargeButtonGroups />
        </CardBody>
      </Card>
    </Col>
  );
};
export default NestingButton;
