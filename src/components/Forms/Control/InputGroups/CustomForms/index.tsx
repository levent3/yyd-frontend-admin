import CardHead from "CommonElements/CardHead";
import { customFormsHeadingData } from "Data/Forms/Control";
import { Card, Col } from "reactstrap";
import { CustomFormsHeading } from "utils/Constant";
import CustomFormsCardBody from "./CustomFormsCardBody";

const CustomForms = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={CustomFormsHeading} subTitle={customFormsHeadingData}/>
        <CustomFormsCardBody />
      </Card>
    </Col>
  );
};

export default CustomForms;
