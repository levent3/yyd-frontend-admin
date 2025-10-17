import CardHead from "CommonElements/CardHead";
import {unCheckedSwitchHeaderData,unCheckedSwitchData,} from "Data/Forms/Widget";
import { Card, Col } from "reactstrap";
import { UncheckedSwitchHeading } from "utils/Constant";
import CommonIconsSwitch from "../common/CommonIconsSwitch";

const UncheckedSwitch = () => {
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal" style={{ minHeight: "562.406px" }}>
        <CardHead title={UncheckedSwitchHeading} subTitle={unCheckedSwitchHeaderData}/>
        <CommonIconsSwitch switchData={unCheckedSwitchData} defaultUnChecked />
      </Card>
    </Col>
  );
};

export default UncheckedSwitch;
