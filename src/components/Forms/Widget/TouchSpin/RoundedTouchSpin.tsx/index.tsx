import CardHead from "CommonElements/CardHead";
import { Card, Col } from "reactstrap";
import CommonTouchSpin from "../common/CommonTouchSpin";
import {defaultTouchSpinData,touchSpinHeaderData,} from "Data/Forms/Widget";
import { RoundedTouchSpinHeading } from "utils/Constant";

const RoundedTouchSpin = () => {
  return (
    <Col xl={12}>
      <Card>
        <CardHead title={RoundedTouchSpinHeading} subTitle={touchSpinHeaderData}/>
        <CommonTouchSpin arrowIcon touchSpinClassNames={defaultTouchSpinData} cardBodyClassName="rounded-touchspin"/>
      </Card>
    </Col>
  );
};

export default RoundedTouchSpin;
