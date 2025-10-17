import CommonCardHeading from "CommonElements/CommonCardHeading";
import { optionsCandlesTickChart } from "Data/widgets/chart";
import Charts from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { StockMarketHeading } from "utils/Constant";

const StockMarket = () => {
  return (
    <Col sm={12} className="box-col-12">
      <div className="donut-chart-widget">
        <Card>
          <CommonCardHeading smallHeading={StockMarketHeading} />
          <CardBody>
            <div id="chart-widget13">
              <Charts options={optionsCandlesTickChart} series={optionsCandlesTickChart.series} height={450} type="line"/>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default StockMarket;
