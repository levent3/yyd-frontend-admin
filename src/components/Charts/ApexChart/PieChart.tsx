import Chart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { PieChart } from "utils/Constant";
import { apexPieChart } from "Data/Charts/ApexChart";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const PieChartClass = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonCardHeading smallHeading={PieChart} />
        <CardBody className="apex-chart">
          <div id="piechart" className="main-piechart">
            <Chart
              options={apexPieChart}
              series={apexPieChart.series}
              type="pie"
              width={380}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChartClass;
