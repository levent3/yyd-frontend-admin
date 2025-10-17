import CardHead from "CommonElements/CardHead";
import {  switchSizingWithIconsHeadingHeaderData } from "Data/Forms/Widget";
import { Card, Col } from "reactstrap";
import { SwitchWithIconsHeading } from "utils/Constant";
import CommonSwitchSize from "../common/CommonSwitchSize";

const SwitchWithIcons = () => {
  return (
    <Col md={12}>
      <Card>
        <CardHead title={SwitchWithIconsHeading} subTitle={switchSizingWithIconsHeadingHeaderData}/>
        <CommonSwitchSize icons />
      </Card>
    </Col>
  );
};

export default SwitchWithIcons;
