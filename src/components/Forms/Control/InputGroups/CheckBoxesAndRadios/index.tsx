import CardHead from "CommonElements/CardHead";
import { CustomFileInputHeadingData } from "Data/Forms/Control";
import { Card, Col } from "reactstrap";
import { CheckboxesAndRadiosHeading } from "utils/Constant";
import CheckBoxesAndRadiosCardBody from "./CheckBoxesAndRadiosCardBody";

const CheckBoxesAndRadios = () => {
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CardHead title={CheckboxesAndRadiosHeading} subTitle={CustomFileInputHeadingData} />
        <CheckBoxesAndRadiosCardBody />
      </Card>
    </Col>
  );
};

export default CheckBoxesAndRadios;
