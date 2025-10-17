import { ProgressCardsData } from "Data/Dashboard/NFT";
import ReactApexChart from "react-apexcharts";
import { Card, Col, CardBody } from "reactstrap";

const ProgressCards = () => {
  return (
    <>
      {ProgressCardsData.map((data, index) => (
        <Col xl={12} md={6} className="box-col-6" key={index}>
          <Card className="widget-hover">
            <CardBody className="radial-progress-card">
              <div>
                <h6 className="mb-0">{data.heading}</h6>
                <div className="sale-details mb-1">
                  <h5 className={`${data.saleClassName} mb-0`}>{data.sale} ETH</h5>
                  <span className="f-12 f-light f-w-500">+{data.saleGrowth}%</span>
                </div>
                <p className="f-light"> $ {data.totalSale} USD</p>
              </div>
              <div className="artist-chart-wrap">
                <div id="artist-chart" style={{ minHeight: 115 }}>
                  <ReactApexChart  height={100}  type="line" options={data.chartOptions} series={data.chartOptions.series}/> 
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ProgressCards;
