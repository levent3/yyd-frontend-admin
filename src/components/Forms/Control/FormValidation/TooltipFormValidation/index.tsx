import CardHead from "CommonElements/CardHead";
import { tooltipFormValidationDetail } from "Data/Forms/Control";
import { Col, CardBody, Card } from "reactstrap";
import { TooltipFormValidationHeading } from "utils/Constant";
import TooltipFormValidationForm from "./TooltipFormValidationForm";

const TooltipFormValidation = () => {
  return (
    <Col sm={12}>
      <Card>
        <CardHead title={TooltipFormValidationHeading} subTitle={tooltipFormValidationDetail}/>
        <CardBody>
          <TooltipFormValidationForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TooltipFormValidation;
