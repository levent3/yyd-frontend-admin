import React from "react";
import ReactApexChart from "react-apexcharts";
import { CardBody, Col, Row } from "reactstrap";
import { currentAcademicChart } from '../../../../../Data/Dashboard/SchoolManagement/Chart';
import StudentsStudyReport from "./StudentsStudyReport";

const OverViewPerformanceCardBody = () => {
  return (
    <CardBody>
      <Row className="g-md-0 g-4">
        <Col xl={5} md={4} className="box-col-12">
          <div className="attendance-chart">
            <div id="chart_current_academic" style={{ minHeight: "231.8px" }}>
              <ReactApexChart
                width={270}
                type="polarArea"
                height={270}
                options={currentAcademicChart}
                series={currentAcademicChart?.series}
              />
            </div>
          </div>
        </Col>
        <StudentsStudyReport />
      </Row>
    </CardBody>
  );
};

export default OverViewPerformanceCardBody;
