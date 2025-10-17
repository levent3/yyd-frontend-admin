import { Row, Col } from "reactstrap";
import LatestUpdate from "./LatestUpdates";
import SearchArticle from "./SearchArticle";
import AskQuestions from "./AskQuestions";

const FaqRightsidebae = () => {
  return (
    <Col xl={4} lg={6} md={5} className=" xl-40 box-col-40">
      <Row className="faqRightSide">
        <SearchArticle />
        <AskQuestions />
        <LatestUpdate />
      </Row>
    </Col>
  );
};
export default FaqRightsidebae;
