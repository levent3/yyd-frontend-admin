import CardHead from "CommonElements/CardHead";
import { animatedButtonsHeaderData } from "Data/Forms/Control";
import { Card, CardBody, Col, Row } from "reactstrap";
import { AnimatedButtonsHeading } from "utils/Constant";
import PaymentMethod from "./PaymentMethod";
import FavoriteSocialMedia from "./FavoriteSocialMedia";

const AnimatedButtons = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal" style={{ minHeight: "405.609px" }}>
        <CardHead
          title={AnimatedButtonsHeading}
          subTitle={animatedButtonsHeaderData}
        />
        <CardBody>
          <Row className="g-3">
            <PaymentMethod />
            <FavoriteSocialMedia />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedButtons;
