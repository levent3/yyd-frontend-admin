import CardHead from "CommonElements/CardHead";
import { floatingFormHeaderData } from "Data/Forms/Control";
import { Card, CardBody, Col } from "reactstrap";
import { FloatingFormHeading } from "utils/Constant";
import FormFloating from "./FormFloating";

const FloatingForm = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={FloatingFormHeading} subTitle={floatingFormHeaderData}/>
        <CardBody>
          <div className="card-wrapper border rounded-3">
            <FormFloating />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FloatingForm;
