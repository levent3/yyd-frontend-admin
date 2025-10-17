import { Col, Row } from "reactstrap";
import LeftBar from "../Common/LeftBar";
import RightBar from "../Common/RightBar";
import HobbiesAndInterests from "./HobbiesAndInterests";
import { PepoleKnow, ViewedYourProfile } from "utils/Constant";
import ActivityLog from "./ActivityLog";
import PeopleYouMayKnow from "./PeopleYouMayKnow";
import EducationAndEmployment from "./EducationAndEmployment";

const AboutTab = () => {
  return (
    <Row>
      <Col xl={3} className="xl-40 box-col-4" lg={12} md={5}>
        <div className="default-according style-1 faq-accordion job-accordion">
          <Row>
            <LeftBar />
          </Row>
        </div>
      </Col>
      <Col xl="6" className="xl-60 box-col-8" lg="12" md="7">
        <Row>
          <PeopleYouMayKnow Heading={PepoleKnow} />
          <HobbiesAndInterests />
          <EducationAndEmployment />
          <PeopleYouMayKnow Heading={ViewedYourProfile} />
          <ActivityLog />
        </Row>
      </Col>
      <Col xl="3" className="xl-100 box-col-12">
        <div className="default-according style-1 faq-accordion job-accordion">
          <Row>
            <RightBar />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default AboutTab;
