import CardHead from "CommonElements/CardHead";
import { variationRadioHeadingData } from "Data/Forms/Control";
import { Card, CardBody, Col, Row } from "reactstrap";
import { VariationRadioHeading } from "utils/Constant";
import SelectPaymentMethod from "./SelectPaymentMethod";
import LearnAboutWebDesign from "./LearnAboutWebDesign";
import RadiosWithCreativeOptions from "./RadiosWithCreativeOptions";

const VariationRadio = () => {
  return (
    <Col xs={12}>
      <Card>
        <CardHead title={VariationRadioHeading} subTitle={variationRadioHeadingData}/>
        <CardBody>
          <Row className="g-3">
            <SelectPaymentMethod />
            <LearnAboutWebDesign />
            <RadiosWithCreativeOptions />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationRadio;
