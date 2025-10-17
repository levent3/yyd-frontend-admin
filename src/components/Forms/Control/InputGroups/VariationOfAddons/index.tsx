import CardHead from "CommonElements/CardHead";
import { VarationOfAddonsHeadingData } from "Data/Forms/Control";
import { Card, CardBody, Col, Row } from "reactstrap";
import { VariationOfAddonsHeading } from "utils/Constant";
import VariationOfAddonsForms from "./VariationOfAddonsForms";
import CommonCardFooter from "@/components/Forms/common/CommonCardFooter";

const VariationOfAddons = () => {
  return (
    <Col xl={6}>
      <Card>
        <CardHead title={VariationOfAddonsHeading} subTitle={VarationOfAddonsHeadingData} />
        <CardBody className="card-wrapper main-custom-form input-radius">
          <Row>
            <Col>
              <VariationOfAddonsForms />
            </Col>
          </Row>
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default VariationOfAddons;
