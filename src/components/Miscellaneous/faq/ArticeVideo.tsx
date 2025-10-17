import { articleVideoData1 } from "Data/faq";
import { Card, CardBody, Col, Media, Row } from "reactstrap";
import { Latestarticles } from "utils/Constant";
import ArticeVideo2 from "./ArticeVideo2";
import ArticeVideo3 from "./ArticeVideo3";

const ArticeVideo = () => {
  return (
    <Col lg={12} className="faq-articles">
      <div className="header-faq">
        <h5 className="mb-0">{Latestarticles}</h5>
      </div>
      <Row>
        <Col xl={4} md={6}>
          <Row>
            {articleVideoData1.map((item, i) => (
              <Col sm={12} key={i}>
                <Card>
                  <CardBody>
                    <Media>
                      {item.iconClass}
                      <Media body className="flex-grow-1">
                        <h6 className="f-w-500">{item.title}</h6>
                        <p>{item.description}</p>
                      </Media>
                    </Media>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <ArticeVideo2 />
        <ArticeVideo3 />
      </Row>
    </Col>
  );
};
export default ArticeVideo;
