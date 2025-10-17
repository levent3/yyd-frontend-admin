import Chart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { DonutChart } from "utils/Constant";
import { apexDonutCharts } from "Data/Charts/ApexChart";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const DonutChartClass = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonCardHeading smallHeading={DonutChart} />
        <CardBody className="apex-chart">
          <div id="donutchart" className="main-donutchart">
            <Chart
              options={apexDonutCharts}
              series={apexDonutCharts.series}
              type="donut"
              width={380}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DonutChartClass;
