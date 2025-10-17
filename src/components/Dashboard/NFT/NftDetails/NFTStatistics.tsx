import { Card, CardHeader, Col } from "reactstrap";
import { Href, Statistics, View } from "utils/Constant";
import NFTStatisticsCardBody from "./NFTStatisticsCardBody";

const NFTStatistics = () => {
  return (
    <Col xxl={4} lg={12} md={6} className="d-xxl-block d-xl-none d-block">
      <Card className="papernote-wrap statistics-card">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <h5>{Statistics}</h5>
            <a className="f-light d-flex align-items-center" href={Href}>
              {View} <i className="f-w-700 icon-arrow-right" />
            </a>
          </div>
        </CardHeader>
        <NFTStatisticsCardBody />
      </Card>
    </Col>
  );
};

export default NFTStatistics;
