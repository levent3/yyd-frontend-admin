import { Container, Row } from "reactstrap";
import CourseFilter from "../LearningList/CourseFilter";
import BlogSingle from "./BlogSingle";

const DetailedCourseContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <BlogSingle />
        <CourseFilter />
      </Row>
    </Container>
  );
};

export default DetailedCourseContainer;
