import { studentLeaderData } from "Data/Dashboard/SchoolManagement";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";
import { DropdownButtonsList, ImgPath, StudentLeaderHeading } from "utils/Constant";
import CommonHeaderWithDropDown from "../common/CommonHeaderWithDropDown";
import { CommonHeader } from "./AcademicPerformance/CommonHeader";

const StudentLeader = () => {
  return (
    <Col xl={12} className="d-xl-block d-none">
      <Card>
      <CommonHeader title={StudentLeaderHeading} />
        <CardBody className="pt-0">
          <div className="student-leader-wrapper">
            {studentLeaderData.map((data, index) => (
              <div key={index} className={`student-leader-content ${data.className ? data.className : ""} `}>
                {data.image ? (
                  <Image width={24} height={27} src={`${ImgPath}/dashboard-7/attendance/student-leader/${data.image}`} alt="rank-1" />
                ) : (<h5>{data?.num}<sup>th</sup></h5>)}
                <Image className="leader-img" width={35} height={35} src={`${ImgPath}/dashboard-7/attendance/student-leader/${data.image2}`} alt={`user-${index + 1}`} />
                <div className="leader-content-height">
                  <h6 className="pb-1">{data.name} </h6>
                  <span className="text-muted">{data.text}</span>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StudentLeader;
