import { Card } from "reactstrap";
import { DailyDropdown, MostPopular, MyCourseTitle } from "utils/Constant";
import CourseBody from "./CourseBody";
import CommonHeaderWithDropDown from "../../common/CommonHeaderWithDropDown";

const MyCourse = () => {
  return (
    <Card className="course-card">
      <CommonHeaderWithDropDown
        headingClassName="m-0"
        heading={MyCourseTitle}
        dropDownToggleClassName="dropdown-toggle"
        dropDownClass="card-header-right-icon"
        dropDownList={DailyDropdown}
        dropDownIcon={false}
        caret={false}
        tag={MostPopular}
      />
      <CourseBody />
    </Card>
  );
};

export default MyCourse;
