import CardHead from "CommonElements/CardHead";
import { Card, Col } from "reactstrap";
import { RadioToggleButtonsHeading } from "utils/Constant";
import { radioToggleButtonsHeaderData } from "../../../../../../Data/Forms/Control/index";
import RadioToggleButtonsCardBody from "./RadioToggleButtonsCardBody";

const RadioToggleButtons = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={RadioToggleButtonsHeading} subTitle={radioToggleButtonsHeaderData}/>
        <RadioToggleButtonsCardBody />
      </Card>
    </Col>
  );
};

export default RadioToggleButtons;
