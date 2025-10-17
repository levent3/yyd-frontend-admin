import CommonCardHeading from "CommonElements/CommonCardHeading";
import { radialChartLive } from "Data/widgets/chart";
import Chart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { SkillStatusHeading } from "utils/Constant";

const SkillStatus = () => {
  return (
    <Col xl={6} lg={12} className="box-col-6 xl-50">
      <Card className="height-equal">
        <CommonCardHeading smallHeading={SkillStatusHeading} />
        <CardBody>
          <div className="chart-container skill-chart">
            <div id="circlechart">
              <Chart options={radialChartLive} series={radialChartLive.series} height="350" type="radialBar" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SkillStatus;
