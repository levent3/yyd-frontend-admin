import CardHead from "CommonElements/CardHead";
import { outLinesTouchSpinData, touchSpinHeaderData } from "Data/Forms/Widget";
import { Card, Col } from "reactstrap";
import { OutLinedTouchSpinHeading } from "utils/Constant";
import CommonTouchSpin from "../common/CommonTouchSpin";

const OutlinedTouchSpin = () => {
  return (
    <Col xl={6}>
      <Card>
        <CardHead title={OutLinedTouchSpinHeading} subTitle={touchSpinHeaderData}/>
        <CommonTouchSpin touchSpinClassNames={outLinesTouchSpinData}  spinClassName={true} />
      </Card>
    </Col>
  );
};

export default OutlinedTouchSpin;
