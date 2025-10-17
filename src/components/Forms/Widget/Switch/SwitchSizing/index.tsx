import CardHead from "CommonElements/CardHead";
import { switchSizingHeadingHeaderData } from "Data/Forms/Widget";
import { Card,  Col } from "reactstrap";
import { SwitchSizingHeading } from "utils/Constant";
import CommonSwitchSize from "../common/CommonSwitchSize";

const SwitchSizing = () => {
  return (
    <Col md={12}>
      <Card>
        <CardHead title={SwitchSizingHeading} subTitle={switchSizingHeadingHeaderData}/>
        <CommonSwitchSize/>
      </Card>
    </Col>
  );
};

export default SwitchSizing;
