import {  CardBody, Col, Row, Button } from 'reactstrap';
import {CreateNow,Explore,ExploreNft,ExploreNftDetail,} from "utils/Constant";

const ExploreNftCardBody = () => {
  return (
    <CardBody>
      <Row>
        <Col xxl={6} className="custom-rs-12">
          <h5 className="mb-3">{ExploreNft}</h5>
          <p className="mb-3 f-light">{ExploreNftDetail}</p>
          <div className="group-btn">
            <Button color="secondary">{Explore}</Button>
            <Button color="white">{CreateNow}</Button>
          </div>
          <ul className="decore">
            <li className="dot-gradient dot-1" />
            <li className="dot-gradient dot-2" />
          </ul>
        </Col>
      </Row>
    </CardBody>
  );
};

export default ExploreNftCardBody;
