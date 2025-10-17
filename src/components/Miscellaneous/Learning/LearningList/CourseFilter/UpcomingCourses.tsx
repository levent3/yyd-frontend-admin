import { useState } from "react";
import { Card, CardBody, Col, Collapse, Media } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import HeaderWithIcon from "CommonElements/HeaderWithIcon";
import { CourseBy, Href, UpcomingCoursesHeading } from "utils/Constant";
import { upcomingCoursesData } from "Data/Learning";

const UpcomingCourses = () => {
  const [isOpen, setIsOpen] = useState(true);


  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon Heading={UpcomingCoursesHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className="upcoming-course">
            {upcomingCoursesData.map((data, index) => <Media key={index} className="justify-content-between">
              <Media body>
                <span className="f-w-600">{data.courseHeading}</span>
                <span className="d-block">
                  {CourseBy} <a href={Href}>{data.courseTeam}</a>
                </span>
                <Rating className="rating ms-1" fillColor="#ff5f24" initialValue={Math.random() * 5} size={14} />
              </Media>
              <div>
                <h5 className="mb-0 font-primary">{data.courseDate}</h5>
                <span className="d-block">{data.courseMonth}</span>
              </div>
            </Media>)}
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default UpcomingCourses;
