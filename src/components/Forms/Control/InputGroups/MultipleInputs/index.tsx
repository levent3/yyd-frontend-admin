import CardHead from "CommonElements/CardHead";
import { multipleInputsHeadingData } from "Data/Forms/Control";
import { Card, Col } from "reactstrap";
import { MultipleInputsHeading } from "utils/Constant";
import MultipleInputsCardBody from "./MultipleInputsCardBody";

const MultipleInputs = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={MultipleInputsHeading} subTitle={multipleInputsHeadingData}/>
        <MultipleInputsCardBody />
      </Card>
    </Col>
  );
};

export default MultipleInputs;
