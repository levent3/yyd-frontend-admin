import CardHead from "CommonElements/CardHead";
import { customCheckBoxHeaderData } from "Data/Forms/Control";
import { Card, CardBody, Col, Row } from "reactstrap";
import { CustomCheckBoxHeading } from "utils/Constant";
import BorderedCheckBox from "./BorderedCheckBox";
import IconCheckBox from "./IconCheckBox";
import FilledCheckBox from "./FilledCheckBox";

const CustomCheckBox = () => {
  return (
    <Col xs={12}>
      <Card>
        <CardHead title={CustomCheckBoxHeading} subTitle={customCheckBoxHeaderData}/>
        <CardBody>
          <Row className="g-3">
            <BorderedCheckBox />
            <IconCheckBox />
            <FilledCheckBox />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomCheckBox;
