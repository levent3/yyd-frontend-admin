import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { latestData } from "Data/faq";
import { Href, LatestUpdates, SeeAll } from "utils/Constant";

const LatestUpdate = () => {
  return (
    <Col lg={12}>
      <Card>
        <CardHeader className="faq-header pb-0">
          <h5 className="d-inline-block m-0">{LatestUpdates}</h5>
          <span className="pull-right d-inline-block">{SeeAll}</span>
        </CardHeader>
        <CardBody className="faq-body">
          {latestData.map((item, i) => (
            <div className="d-flex updates-faq-main" key={i}>
              <div className="updates-faq">{item.iconClass}</div>
              <div className="flex-grow-1 updates-bottom-time">
                <p>{item.name} <a href={Href}>{item.val}</a> {item.title}</p>
                <p>{item.time}</p>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LatestUpdate;
