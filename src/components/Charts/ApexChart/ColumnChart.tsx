import Chart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { ColumnChart } from "utils/Constant";
import { apexColumnChartsone } from "Data/Charts/ApexChart";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const ColumnChartClass = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonCardHeading smallHeading={ColumnChart} />
        <CardBody>
          <div id="column-chart">
            <Chart options={apexColumnChartsone} series={apexColumnChartsone.series} type="bar" height={350}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColumnChartClass;
