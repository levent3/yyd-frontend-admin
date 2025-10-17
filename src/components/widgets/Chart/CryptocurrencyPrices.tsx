import ReactApexChart from "react-apexcharts";
import { optionsCryptoPriceChart } from "Data/widgets/chart";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { CryptocurrencyPricesHeading } from "utils/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";

const CryptocurrencyPrices = () => {
  return (
    <Col xl={6} lg={12} className="xl-50">
      <Card className="height-equal">
        <CommonCardHeading smallHeading={CryptocurrencyPricesHeading} />
        <CardBody>
          <div className="chart-container crypto-chart">
            <Row>
              <Col xs={12}>
                <div id="chart-crypto">
                  <ReactApexChart options={optionsCryptoPriceChart} series={optionsCryptoPriceChart.series} type="area" id="chart-widget7" height={400} />
                </div>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CryptocurrencyPrices;
