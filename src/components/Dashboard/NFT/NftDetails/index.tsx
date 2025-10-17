import { Col, Row } from "reactstrap";
import TrendingNFT from "./TrendingNFT";
import TopNFT from "./TopNFT";
import NFTStatistics from "./NFTStatistics";
import NftDetailsCard from "./NftDetailsCard";

const NftDetails = () => {
  return (
    <Col xxl={9} xl={8} className="box-col-12">
      <Row>
        <TrendingNFT />
        <TopNFT />
        <NFTStatistics />
        <NftDetailsCard />
      </Row>
    </Col>
  );
};

export default NftDetails;
