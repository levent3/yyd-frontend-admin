import { articleVideoData2 } from "Data/faq";
import { Card, CardBody, Col, Media, Row } from "reactstrap";

const ArticeVideo2 = () => {
  return (
    <Col xl={4} md={6}>
      <Row>
        {articleVideoData2.map((item, i) => (
          <Col sm={12} key={i}>
            <Card>
              <CardBody>
                <Media>
                  {item.iconClass}
                  <Media body>
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
  );
};
export default ArticeVideo2;
