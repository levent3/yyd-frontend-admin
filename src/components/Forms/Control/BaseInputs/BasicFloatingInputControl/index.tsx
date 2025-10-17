import CardHead from "CommonElements/CardHead";
import { basicFloatingInputControlHeaderData } from "Data/Forms/Control";
import { Col, Card } from "reactstrap";
import { BasicFloatingInputControlHeading } from "utils/Constant";
import BasicFloatingInputControlForm from "./BasicFloatingInputControlForm";

const BasicFloatingInputControl = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CardHead title={BasicFloatingInputControlHeading} subTitle={basicFloatingInputControlHeaderData} />
        <BasicFloatingInputControlForm />
      </Card>
    </Col>
  );
};

export default BasicFloatingInputControl;
