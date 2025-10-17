import { Col, Row } from "reactstrap";
import CourseCategories from "./CourseCategories";
import CategoriesCheckBoxes from "./Categories";
import UpcomingCourses from "./UpcomingCourses";
import { useState } from "react";
import { Href } from "utils/Constant";

const CourseFilter = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <Col xl={3} className="xl-40 box-col-12 learning-filter">
      <div className="md-sidebar">
        <a
          onClick={() => setShowSideBar(!showSideBar)}
          className="email-aside-toggle md-sidebar-toggle btn btn-primary"
          href={Href}
        >
          Learning filter
        </a>
        <div
          className={`md-sidebar-aside job-sidebar ${
            showSideBar ? "open" : ""
          } `}
        >
          <div className="default-according style-1 faq-accordion job-accordion">
            <Row>
              <CourseCategories />
              <CategoriesCheckBoxes />
              <UpcomingCourses />
            </Row>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CourseFilter;
