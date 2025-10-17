import CardHead from "CommonElements/CardHead";
import { variationCheckBoxHeadingData } from "Data/Forms/Control";
import { Card, CardBody, Col, Row } from "reactstrap";
import { VariationCheckBoxHeading } from "utils/Constant";
import EnjoyActivities from "./EnjoyActivities";
import SelectRequirements from "./SelectRequirements";

const VariationCheckBox = () => {
  return (
    <Col sm={12}>
      <Card>
        <CardHead title={VariationCheckBoxHeading} subTitle={variationCheckBoxHeadingData}/>
        <CardBody>
          <Row className="g-3">
            <EnjoyActivities />
            <SelectRequirements />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationCheckBox;
