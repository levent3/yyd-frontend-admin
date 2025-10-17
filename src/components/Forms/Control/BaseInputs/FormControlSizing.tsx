import CardHead from "CommonElements/CardHead";
import { Card, CardBody, Col, Input } from "reactstrap";
import { formControlSizingHeaderData } from "../../../../../Data/Forms/Control/index";
import { FormControlSizingHeading } from "utils/Constant";

const FormControlSizing = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={FormControlSizingHeading} subTitle={formControlSizingHeaderData}/>
        <CardBody>
          <Input className="form-control-sm" type="text" placeholder=".form-control-sm"/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormControlSizing;
