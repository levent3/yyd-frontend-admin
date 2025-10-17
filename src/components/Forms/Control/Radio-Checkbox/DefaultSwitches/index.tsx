import CardHead from "CommonElements/CardHead";
import { defaultSwitchesHeaderData } from "Data/Forms/Control";
import { Card, CardBody, Col, Row } from "reactstrap";
import { DefaultSwitchesBoxHeading } from "utils/Constant";
import CustomSwitch from "./CustomSwitch";
import DisabledSwitch from "./DisabledSwitch";
import RightSwitches from "./RightSwitches";

const DefaultSwitches = () => {
  return (
    <Col xs={12}>
      <Card>
        <CardHead
          title={DefaultSwitchesBoxHeading}
          subTitle={defaultSwitchesHeaderData}
        />

        <CardBody>
          <Row className="g-3">
            <CustomSwitch />
            <DisabledSwitch />
            <RightSwitches />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultSwitches;
