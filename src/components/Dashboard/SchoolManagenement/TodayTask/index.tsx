import CommonHeaderWithDropDown from "../../common/CommonHeaderWithDropDown";
import { DropdownButtonsList, TodaysTaskHeading } from "utils/Constant";
import { Card, CardBody, Col } from "reactstrap";
import TodayTaskCardBody from "./TodayTaskCardBody";
import { CommonHeader } from "../AcademicPerformance/CommonHeader";

const TodayTask = () => {
  return (
    <Col xl={8} className="order-2">
      <Card className="height-equal" style={{ minHeight: "444.469px" }}>
      <CommonHeader title={TodaysTaskHeading} />
        <TodayTaskCardBody />
      </Card>
    </Col>
  );
};

export default TodayTask;
