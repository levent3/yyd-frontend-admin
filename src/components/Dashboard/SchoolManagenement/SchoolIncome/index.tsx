import { Card, Col } from "reactstrap";
import CommonHeaderWithDropDown from "../../common/CommonHeaderWithDropDown";
import { DropdownButtonsList, Income } from "utils/Constant";
import SchoolIncomeCardBody from "./SchoolIncomeCardBody";
import { CommonHeader } from "../AcademicPerformance/CommonHeader";

const SchoolIncome = () => {
  return (
    <Col xl={4} sm={6} className="box-col-5">
      <Card className="height-equal" style={{ minHeight: "444.469px" }}>
        <CommonHeader title={`Income`}/>
        <SchoolIncomeCardBody/>
      </Card>
    </Col>
  );
};

export default SchoolIncome;
