import CardHead from "CommonElements/CardHead";
import { flatInputStyleHeaderData } from "Data/Forms/Control";
import { Card, Col } from "reactstrap";
import { FlatInputStyleHeading } from "utils/Constant";
import FlatInputStyleForm from "./FlatInputStyleForm";

const FlatInputStyle = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={FlatInputStyleHeading} subTitle={flatInputStyleHeaderData}/>
        <FlatInputStyleForm />
      </Card>
    </Col>
  );
};

export default FlatInputStyle;
