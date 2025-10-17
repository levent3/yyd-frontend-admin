import { Card, CardBody, Col, Row, Button } from "reactstrap";
import ExploreNftCardBody from "./ExploreNftCardBody";

const ExploreNftCard = () => {
  return (
    <Col xxl={6} xl={4} className="custom-rs-4 explore-wrap box-col-none">
      <Card className="explore-card height-equal">
        <ExploreNftCardBody />
      </Card>
    </Col>
  );
};

export default ExploreNftCard;
