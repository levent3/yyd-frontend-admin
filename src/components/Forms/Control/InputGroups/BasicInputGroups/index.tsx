import CardHead from "CommonElements/CardHead";
import { basicInputGroupsHeadingData } from "Data/Forms/Control";
import { Card, CardBody, Col, Row, CardFooter } from "reactstrap";
import { BasicInputGroupsHeading } from "utils/Constant";
import Basic from "./Basic";
import Wrapping from "./Wrapping";
import CommonCardFooter from "@/components/Forms/common/CommonCardFooter";

const BasicInputGroups = () => {
  return (
    <Col xl={6}>
      <Card>
        <CardHead title={BasicInputGroupsHeading} subTitle={basicInputGroupsHeadingData}/>
        <CardBody>
          <Row className="g-3">
            <Basic />
            <Wrapping />
          </Row>
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default BasicInputGroups;
