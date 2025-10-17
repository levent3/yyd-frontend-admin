import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { MessageSquare, Settings } from "react-feather";
import NavigationOption from "./NavigationOption";
import { AskQuestion, Href, Navigation } from "utils/Constant";

const AskQuestions = () => {
  return (
    <Col lg={12}>
      <Card className="card-mb-faq">
        <CardHeader className="faq-header pb-0">
          <h5 className="m-0">{Navigation}</h5>
          <Settings />
        </CardHeader>
        <CardBody className="faq-body">
          <div className="navigation-btn">
            <a className="btn btn-primary" style={{ color: "#fff" }} href={Href}>
              <MessageSquare className="m-r-10" />
              {AskQuestion}
            </a>
          </div>
          <NavigationOption />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AskQuestions;
