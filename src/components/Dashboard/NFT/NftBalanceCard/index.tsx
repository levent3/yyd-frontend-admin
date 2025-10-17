import { Card, Col } from "reactstrap";
import NftBalanceCardBody from "./NftBalanceCardBody";
import NftBalanceCardHeader from "./NftBalanceCardHeader";

const NftBalanceCard = () => {
  return (
    <Col xxl={3} xl={4} md={6} className="custom-rs-4 box-col-6">
      <Card className="total-balance">
        <NftBalanceCardHeader />
        <NftBalanceCardBody />
      </Card>
    </Col>
  );
};

export default NftBalanceCard;
