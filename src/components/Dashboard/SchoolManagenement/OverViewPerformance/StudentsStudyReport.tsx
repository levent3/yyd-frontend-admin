import { studentsStudyReportData } from "Data/Dashboard/SchoolManagement";
import Image from "next/image";
import { Col, Row } from "reactstrap";
import { ImgPath } from "utils/Constant";

const StudentsStudyReport = () => {
  return (
    <Col xl={7} md={8} className="box-col-none">
      <Row className="g-3">
        {studentsStudyReportData.map((data, index) => (
          <Col xl={12} key={index}>
            <div className="light-card attendance-card widget-hover">
              <div className="left-overview-content">
                <div className="svg-box">
                  <Image width={28} height={29} src={`${ImgPath}/dashboard-7/attendance/${index + 1}.png`} alt="homework"/>
                </div>
              </div>
              <div className="right-overview-content">
                <div>
                  <h6>{data.reportName}</h6>
                  <span className="text-muted text-ellipsis">{data.reportDetails}</span>
                </div>
                <div className="d-flex marks-count">
                  <h5>
                    {data.score}/<sub className="text-muted">100</sub>
                  </h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <i className="icon-arrow-up txt-success pe-2 f-w-600" />
                    <span className="txt-success f-w-500">+{data.scoreIncrement}%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default StudentsStudyReport;
