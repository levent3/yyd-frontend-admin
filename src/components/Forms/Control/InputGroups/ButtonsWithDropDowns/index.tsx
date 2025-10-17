import CardHead from "CommonElements/CardHead";
import { buttonsWithDropdownsHeadingData } from "Data/Forms/Control";
import { Card, Col } from "reactstrap";
import { ButtonsWithDropDownsHeading } from "utils/Constant";
import ButtonsWithDropDownsCardBody from "./ButtonsWithDropDownsCardBody";

const ButtonsWithDropDowns = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal" >
        <CardHead title={ButtonsWithDropDownsHeading} subTitle={buttonsWithDropdownsHeadingData} />
        <ButtonsWithDropDownsCardBody />
      </Card>
    </Col>
  );
};

export default ButtonsWithDropDowns;
