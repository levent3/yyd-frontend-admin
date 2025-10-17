import { Col, Row } from "reactstrap";
import { FeaturedTutorials } from "utils/Constant";
import FeaturesTutorial from "../Knowledgebase/FeaturesTutorial";

const FAQFeaturesTutorial = () => {
  return (
    <Col lg={12} className="featured-tutorial">
      <div className="header-faq">
        <h5 className="mb-0">{FeaturedTutorials}</h5>
      </div>
      <Row>
        <FeaturesTutorial />
      </Row>
    </Col>
  );
};
export default FAQFeaturesTutorial;
