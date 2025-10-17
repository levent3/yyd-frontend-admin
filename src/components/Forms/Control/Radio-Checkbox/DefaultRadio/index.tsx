import CardHead from "CommonElements/CardHead";
import { defaultRadioHeaderData } from "Data/Forms/Control";
import { Card, CardBody, Col, Row } from "reactstrap";
import { DefaultRadioHeading } from "utils/Constant";
import CustomRadios from "./CustomRadios";
import DisabledRadios from "./DisabledRadios";
import RightRadios from "./RightRadios";

const DefaultRadio = () => {
  return (
    <Col xs={12}>
      <Card>
        <CardHead title={DefaultRadioHeading} subTitle={defaultRadioHeaderData}/>
        <CardBody>
          <Row className="g-3">
            <CustomRadios />
            <DisabledRadios />
            <RightRadios />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultRadio;
