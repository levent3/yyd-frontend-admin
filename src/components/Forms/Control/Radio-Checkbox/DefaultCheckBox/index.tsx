import CardHead from "CommonElements/CardHead";
import { defaultCheckBoxHeaderData } from "Data/Forms/Control";
import { DefaultCheckBoxHeading } from "utils/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import DefaultChecks from "./DefaultChecks";
import DisabledChecks from "./DisabledChecks";
import RightCheck from "./RightCheck";
import Indeterminate from "./Indeterminate";

const DefaultCheckBox = () => {
  return (
    <Col xs={12}>
      <Card>
        <CardHead
          title={DefaultCheckBoxHeading}
          subTitle={defaultCheckBoxHeaderData}
        />
        <CardBody>
          <Row className="g-3">
            <DefaultChecks />
            <DisabledChecks />
            <RightCheck />
            <Indeterminate />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultCheckBox;
