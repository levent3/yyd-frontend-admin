import CommonCardHeading from "CommonElements/CommonCardHeading";
import { optionSalesChart } from "Data/widgets/chart";
import Charts from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import { MonthlySalesHeading } from "utils/Constant";

const MonthlySales = () => {
  return (
    <Col xl={5} lg={12} className="xl-50 box-col-6">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeading smallHeading={MonthlySalesHeading} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs={12}>
                  <div id="chart-widget8">
                    <Charts options={optionSalesChart} series={optionSalesChart.series} height={300} type="radar"/>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default MonthlySales;
