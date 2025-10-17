import CardHead from "CommonElements/CardHead";
import { defaultTouchSpinData, touchSpinHeaderData } from "Data/Forms/Widget";
import { Card, Col } from "reactstrap";
import { DefaultTouchSpinHeading } from "utils/Constant";
import CommonTouchSpin from "../common/CommonTouchSpin";

const DefaultTouchSpin = () => {

  return (
    <Col xl={6}>
      <Card>
        <CardHead title={DefaultTouchSpinHeading} subTitle={touchSpinHeaderData}/>
        <CommonTouchSpin touchSpinClassNames={defaultTouchSpinData} /> 
      </Card>
    </Col>
  );
};

export default DefaultTouchSpin;
