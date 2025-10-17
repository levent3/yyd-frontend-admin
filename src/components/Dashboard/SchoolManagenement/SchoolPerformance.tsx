import { schoolPerforManceOptions } from "Data/Dashboard/SchoolManagement/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { DropdownButtonsList, SchoolPerformanceHeading } from "utils/Constant";
import CommonHeaderWithDropDown from '../common/CommonHeaderWithDropDown';

const SchoolPerformance = () => {
  return (
    <Col xxl={8} md={7}>
      <Card>
        <CommonHeaderWithDropDown dropDownIcon={false} heading={SchoolPerformanceHeading} dropDownList={DropdownButtonsList} caret dropDownClass="card-header-right-icon"/>
        <CardBody className="pt-0">
          <div className="school-performance-wrap">
            <div id="chart-school-performance" style={{ minHeight: 235 }} >
            <ReactApexChart options={schoolPerforManceOptions} type="line"  series={schoolPerforManceOptions?.series} height={220} width={684} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SchoolPerformance;
