import Chart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { SteplineChart } from "utils/Constant";
import { apexSteplineChart } from "Data/Charts/ApexChart";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const SteplineChartClass = () => {
  return (
    <Col sm={12} xl={6} className="box-col-12">
      <Card>
        <CommonCardHeading smallHeading={SteplineChart} />
        <CardBody>
          <div id="stepline">
            <Chart options={apexSteplineChart} series={apexSteplineChart.series} type="line" height={350}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SteplineChartClass;
