import CardHead from "CommonElements/CardHead";
import { sizingHeadingData } from "Data/Forms/Control";
import { Card, Col } from "reactstrap";
import { SizingHeader } from "utils/Constant";
import SizingCardBody from "./SizingCardBody";

const Sizing = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={SizingHeader} subTitle={sizingHeadingData} />
        <SizingCardBody />
      </Card>
    </Col>
  );
};

export default Sizing;
