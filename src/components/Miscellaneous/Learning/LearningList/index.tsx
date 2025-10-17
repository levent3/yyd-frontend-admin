import { Col, Container, Row } from "reactstrap";
import MainLearningCards from "./MainLearningCards";
import SmallLearningCards from "./SmallLearningCards";
import CourseFilter from "./CourseFilter";

const LearningListContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xl={9} className="xl-60 order-xl-0 order-1 box-col-12">
          <Row>
            <MainLearningCards />
            <SmallLearningCards />
          </Row>
        </Col>
        <CourseFilter/>
      </Row>
    </Container>
  );
};

export default LearningListContainer;
