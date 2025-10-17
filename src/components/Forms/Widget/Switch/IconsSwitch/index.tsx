import { Card, Col } from "reactstrap";
import CardHead from "CommonElements/CardHead";
import { IconsWithHeading } from "utils/Constant";
import { iconsSwitchData, iconsSwitchHeaderData } from "Data/Forms/Widget";
import CommonIconsSwitch from "../common/CommonIconsSwitch";

const IconsSwitch = () => {

  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal" style={{ minHeight: "562.406px" }}>
        <CardHead title={IconsWithHeading} subTitle={iconsSwitchHeaderData} />
        <CommonIconsSwitch switchData={iconsSwitchData} mediaBodyClassName="icon-state" />
      </Card>
    </Col>
  );
};

export default IconsSwitch;
