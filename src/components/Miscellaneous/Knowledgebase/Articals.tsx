import { articalsData } from "Data/knoweldgebase";
import { Fragment } from "react";
import { Card, CardBody, Col, Media } from "reactstrap";

const Articals = () => {
  return (
    <Fragment>
      {articalsData.map((item) => (
        <Col xl={4} className={item.class2} key={item.id}>
          <Card className="bg-primary">
            <CardBody>
              <Media className="faq-widgets widgets-card">
                <Media body>
                  <h5>{item.title}</h5>
                  <p>{item.paragraph}</p>
                </Media>
                {item.icon}
              </Media>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default Articals;
