import CardHead from "CommonElements/CardHead";
import { Card, Col } from "reactstrap";
import CommonIconsSwitch from "../common/CommonIconsSwitch";
import { bordersWithIconsHeading } from "utils/Constant";
import {
  borderedSwitchData,
  bordersWithIconsHeaderData,
} from "Data/Forms/Widget";

const BordersWithIcons = () => {
  return (
    <Col xl={4}>
      <Card className="height-equal" style={{ minHeight: "562.406px" }}>
        <CardHead
          title={bordersWithIconsHeading}
          subTitle={bordersWithIconsHeaderData}
        />
        <CommonIconsSwitch
          switchData={borderedSwitchData}
          mediaBodyClassName="icon-state switch-outline"
        />
      </Card>
    </Col>
  );
};

export default BordersWithIcons;
