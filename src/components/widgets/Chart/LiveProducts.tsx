import CommonCardHeading from "CommonElements/CommonCardHeading";
import { optionsProductChart } from "Data/widgets/chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import { LiveProductsHeading } from "utils/Constant";

const LiveProducts = () => {
  return (
    <Col xl={7} lg={12} className="xl-50">
      <div className="small-chart-widget chart-widgets-small">
        <Card className="height-equal">
          <CommonCardHeading smallHeading={LiveProductsHeading} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs={12}>
                  <ReactApexChart options={optionsProductChart} series={optionsProductChart.series} type="area" id="chart-widget6" height={320} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default LiveProducts;
