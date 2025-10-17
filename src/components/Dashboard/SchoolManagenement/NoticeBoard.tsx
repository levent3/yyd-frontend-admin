import { noticeBoardData } from "Data/Dashboard/SchoolManagement";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeaderWithDropDown from "../common/CommonHeaderWithDropDown";
import { DropdownButtonsList, NoticeBoardHeading } from "utils/Constant";
import { CommonHeader } from "./AcademicPerformance/CommonHeader";

const NoticeBoard = () => {
  return (
    <Col xl={12} className="notification box-col-6 d-xl-block d-none">
      <Card>
        <CommonHeader title={NoticeBoardHeading} />
        <CardBody className="pt-0 notice-board">
          <ul>
            {noticeBoardData.map((data, index) => (
              <li className="d-flex" key={index}>
                <div className={`activity-dot-${data.color}`} />
                <div className="ms-3">
                  <p className="d-flex mb-2">
                    <span className="date-content light-background">{data.date}</span>
                  </p>
                  <h6>{data.detail}</h6>
                  <p className="f-light">
                    {data.name}
                    {data.badge ? (<span className="badge alert-light-success txt-success ms-2 f-w-600">New</span>) : null}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NoticeBoard;
