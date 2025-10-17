import Chart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { MixedChart } from "utils/Constant";
import { apexMixedCharts } from "Data/Charts/ApexChart";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const MixedChartClass = () => {
  return (
    <Col sm={12} xl={12} className="box-col-12">
      <Card>
        <CommonCardHeading smallHeading={MixedChart} />
        <CardBody>
          <div id="mixedchart">
            <Chart options={apexMixedCharts} series={apexMixedCharts.series} type="line" height={350}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MixedChartClass;
