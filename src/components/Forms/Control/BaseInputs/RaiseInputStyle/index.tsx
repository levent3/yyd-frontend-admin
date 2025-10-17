import CardHead from "CommonElements/CardHead";
import { raiseInputStyleHeaderData } from "Data/Forms/Control";
import { Card, Col } from "reactstrap";
import { RaiseInputStyleHeading } from "utils/Constant";
import RaiseInputStyleForm from "./RaiseInputStyleForm";

const RaiseInputStyle = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={RaiseInputStyleHeading} subTitle={raiseInputStyleHeaderData}/>
        <RaiseInputStyleForm />
      </Card>
    </Col>
  );
};

export default RaiseInputStyle;
