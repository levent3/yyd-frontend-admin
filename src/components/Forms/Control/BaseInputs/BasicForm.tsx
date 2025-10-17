import CardHead from "CommonElements/CardHead";
import { basicFormHeaderData } from "Data/Forms/Control";
import { Button, Card, CardBody, Col, Input, Label } from "reactstrap";
import { BasicFormHeading, CheckMeOut, Email, Password, SignIn } from "utils/Constant";
import FormBasic from "./FormBasic";

const BasicForm = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={BasicFormHeading} subTitle={basicFormHeaderData} />
        <CardBody>
          <div className="card-wrapper border rounded-3">
            <FormBasic/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicForm;
