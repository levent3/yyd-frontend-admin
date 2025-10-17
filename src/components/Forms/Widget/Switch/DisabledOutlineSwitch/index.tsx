import CardHead from "CommonElements/CardHead";
import { disabledOutlineSwitchHeaderData } from "Data/Forms/Widget";
import { Card,  Col } from "reactstrap";
import { DisabledOutlineSwitchHeading } from "utils/Constant";
import DisabledOutlineSwitchCardBody from "./DisabledOutlineSwitchCardBody";

const DisabledOutlineSwitch = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={DisabledOutlineSwitchHeading} subTitle={disabledOutlineSwitchHeaderData}/>
        <DisabledOutlineSwitchCardBody />
      </Card>
    </Col>
  );
};

export default DisabledOutlineSwitch;
