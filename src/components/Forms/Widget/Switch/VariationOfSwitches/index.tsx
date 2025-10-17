import CardHead from "CommonElements/CardHead";
import { variationOfSwitchHeaderData } from "Data/Forms/Widget";
import { Card, Col } from "reactstrap";
import { VariationOfSwitchesHeading } from "utils/Constant";
import VariationOfSwitchesCardBody from "./VariationOfSwitchesCardBody";

const VariationOfSwitches = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={VariationOfSwitchesHeading} subTitle={variationOfSwitchHeaderData}/>
        <VariationOfSwitchesCardBody />
      </Card>
    </Col>
  );
};

export default VariationOfSwitches;
