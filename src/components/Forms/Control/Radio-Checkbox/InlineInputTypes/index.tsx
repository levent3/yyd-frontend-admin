import CardHead from "CommonElements/CardHead";
import { inlineInputTypesHeaderData } from "Data/Forms/Control";
import { Card, CardBody, Col, Row } from "reactstrap";
import { InlineInputTypesHeading } from "utils/Constant";
import InlineCheckbox from "./InlineCheckbox";
import InlineRadios from "./InlineRadios";
import InlineSwitches from "./InlineSwitches";

const InlineInputTypes = () => {
  return (
    <Col xs={12}>
      <Card>
        <CardHead
          title={InlineInputTypesHeading}
          subTitle={inlineInputTypesHeaderData}
        />

        <CardBody>
          <Row className="g-3">
            <InlineCheckbox />
            <InlineRadios />
            <InlineSwitches />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineInputTypes;
