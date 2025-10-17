import CardHead from "CommonElements/CardHead";
import { basicHTMLInputControlHeaderData } from "Data/Forms/Control";
import { Card, Col } from "reactstrap";
import { BasicHTMLInputControlHeading } from "utils/Constant";
import BasicHTMLInputControlForm from "./BasicHTMLInputControlForm";

const BasicHTMLInputControl = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CardHead title={BasicHTMLInputControlHeading} subTitle={basicHTMLInputControlHeaderData} />
        <BasicHTMLInputControlForm />
      </Card>
    </Col>
  );
};

export default BasicHTMLInputControl;
