import CardHead from "CommonElements/CardHead";
import { Card, CardBody, Col } from "reactstrap";
import { ValidationFormHeading } from "utils/Constant";
import { validationFormHeadingData } from "../../../../../../Data/Forms/Control/index";
import ValidationsForm from "./ValidationsForm";

const ValidationForm = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CardHead
          title={ValidationFormHeading}
          subTitle={validationFormHeadingData}
        />
        <CardBody>
          <ValidationsForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ValidationForm;
