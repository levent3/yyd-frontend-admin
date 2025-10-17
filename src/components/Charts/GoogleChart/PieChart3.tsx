import { Card, CardBody, Col } from "reactstrap";
import { DonutChart } from "utils/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { googleChartData } from "Data/Charts/GoogleChart";

const PieChart3Class = () => {
  return (
      <Col sm={12} xl={6}>
        <Card>
        <CommonCardHeading smallHeading={`${DonutChart}${3}`} />
          <CardBody className="chart-block">
            <div className="chart-overflow" id="pie-chart1">
              <Chart
                width={"100%"}
                height={"400px"}
                chartType={"PieChart"}
                loader={<div>{"Loading Chart"}</div>}
                data={googleChartData.GoogleDonutChart.data}
                options={googleChartData.GoogleDonutChart.option && { pieHole: 0.4 }}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default PieChart3Class;