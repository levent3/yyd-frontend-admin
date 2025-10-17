import CardHead from "CommonElements/CardHead";
import { basicRadioAndCheckBoxHeaderData } from "Data/Forms/Control";
import { Card, CardBody, Col, Row } from "reactstrap";
import { BasicRadioAndCheckBox } from "utils/Constant";
import SimpleCheckbox from "./SimpleCheckbox";
import SimpleRadios from "./SimpleRadios";

const BasicRadioAndCheckbox = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal" style={{ minHeight: "405.609px" }}>
        <CardHead
          title={BasicRadioAndCheckBox}
          subTitle={basicRadioAndCheckBoxHeaderData}
        />
        <CardBody>
          <Row className="g-3">
            <SimpleCheckbox />
            <SimpleRadios />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicRadioAndCheckbox;
