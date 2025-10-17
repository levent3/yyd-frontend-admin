import { Card, Col } from "reactstrap";
import TrendingCreatorCardHeader from "./TrendingCreatorCardHeader";
import TrendingCreatorCardBody from "./TrendingCreatorCardBody";

const TrendingCreatorCard = () => {
  return (
    <Col xxl={3} xl={4} md={6} className="custom-rs-4 box-col-6">
      <Card className="trending-card height-equal" style={{ minHeight: 280 }}>
        <TrendingCreatorCardHeader />
        <TrendingCreatorCardBody />
      </Card>
    </Col>
  );
};

export default TrendingCreatorCard;
