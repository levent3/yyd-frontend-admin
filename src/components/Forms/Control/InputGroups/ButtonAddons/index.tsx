import CardHead from "CommonElements/CardHead";
import { ButtonAddonsHeading, Submit } from "utils/Constant";
import { buttonAddonsHeadingData } from "../../../../../../Data/Forms/Control/index";
import {  Card,  Col } from "reactstrap";
import ButtonAddonsCardBody from "./ButtonAddonsCardBody";

const ButtonAddons = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={ButtonAddonsHeading} subTitle={buttonAddonsHeadingData}/>
        <ButtonAddonsCardBody />
      </Card>
    </Col>
  );
};

export default ButtonAddons;
