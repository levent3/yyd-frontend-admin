import SvgIcon from "CommonElements/Icons/SvgIcon";
import { courseBoxData } from "Data/widgets/general";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Href } from "../../../../utils/Constant/index";
import SquareGroup from "./SquareGroup";

const CourseBox = () => {
  return (
    <Col xxl={3} xl={4} md={6} className="box-col-6">
      <Row>
        {courseBoxData.map((data, index) => (
          <Col sm={12} key={index}>
            <Card className={`course-box widget-course`}>
              <CardBody>
                <div className="course-widget">
                  <div className={`course-icon ${data.color ? data.color : ""}`}>
                    <SvgIcon className="fill-icon" iconId={data.icon} />
                  </div>
                  <div>
                    <h4 className="mb-0">{data.course}</h4>
                    <span className="f-light">{data.title}</span>
                    <a className="btn btn-light f-light" href={Href}>
                      {data.link}
                      <span className="ms-2">
                        <SvgIcon className="fill-icon f-light" iconId="arrowright"/>
                      </span>
                    </a>
                  </div>
                </div>
              </CardBody>
              <SquareGroup />
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default CourseBox;
