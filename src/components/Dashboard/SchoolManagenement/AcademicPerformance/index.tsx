import { AcademicPerforManceOptions } from "Data/Dashboard/SchoolManagement/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { AcademicPerformanceHeading, DropdownButtonsList } from "utils/Constant";
import { CommonHeader } from "./CommonHeader";

const AcademicPerformance = () => { 

  return (
    <Col xxl={4} md={5}>
      <Card>
        <CommonHeader title={AcademicPerformanceHeading} />
        <CardBody className="pt-0">
          <div className="performance-wrap">
            <div id="academic_performance-chart" style={{ minHeight: 245 }}>
              <ReactApexChart options={AcademicPerforManceOptions} type="area" series={AcademicPerforManceOptions?.series} height={230} width={300} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AcademicPerformance;