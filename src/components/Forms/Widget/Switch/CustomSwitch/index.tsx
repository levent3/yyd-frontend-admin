import CardHead from "CommonElements/CardHead";
import { customSwitchHeaderData } from "Data/Forms/Widget";
import { Card, CardBody, Col, Row } from "reactstrap";
import { CustomSwitchHeading } from "utils/Constant";
import CommonCustomSwitch from "./common/CommonCustomSwitch";

const CustomSwitch = () => {
  return (
    <Col md={12}>
      <Card>
        <CardHead title={CustomSwitchHeading} subTitle={customSwitchHeaderData}/>
        <CardBody>
          <Row className="g-3">
            <CommonCustomSwitch sm={6} />
            <CommonCustomSwitch cardWrapperClassName="radius-none" formCheckSizeClassName="default-square" sm={6}/>
            <CommonCustomSwitch cardWrapperClassName="common-flex" disabled  />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomSwitch;
