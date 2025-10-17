import CardHead from "CommonElements/CardHead";
import { customRadioBoxHeaderData } from "Data/Forms/Control";
import { Card, CardBody, Col, Row } from "reactstrap";
import { CustomRadioBoxHeading } from "utils/Constant";
import BorderedRadio from "./BorderedRadio";
import IconRadioBox from "./IconRadioBox";
import FilledRadio from "./FilledRadio";

const CustomRadio = () => {
  return (
    <Col xs={12}>
      <Card>
        <CardHead title={CustomRadioBoxHeading} subTitle={customRadioBoxHeaderData}/>
        <CardBody>
          <Row className="g-3">
            <BorderedRadio />
            <IconRadioBox />
            <FilledRadio />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomRadio;
