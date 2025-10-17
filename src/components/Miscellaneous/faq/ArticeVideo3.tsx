import { articleVideoData3 } from "Data/faq";
import { Card, CardBody, Col, Media, Row } from "reactstrap";

const ArticeVideo3 = () => {
  return (
    <Col xl={4}>
      <Row>
        {articleVideoData3.map((item, i) => (
          <Col xl={12} className={!item.md ? "col-md-6" : ""} key={i}>
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
export default ArticeVideo3;
