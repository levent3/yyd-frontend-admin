import { Card, CardBody, Col } from "reactstrap";
import { BubbleChart } from "utils/Constant";
import Chart from "react-apexcharts";
import { apex3DbubbleCharts } from "Data/Charts/ApexChart";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const BubbleChartClass = () => {
  return (
    <Col sm={12} xl={6} className="box-col-12">
      <Card>
        <CommonCardHeading smallHeading={BubbleChart} />
        <CardBody>
          <div id="chart-bubble">
            <Chart options={apex3DbubbleCharts} series={apex3DbubbleCharts.series} type="bubble" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BubbleChartClass;
