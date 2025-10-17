import { Card, CardBody, Col } from "reactstrap";
import { PieChart } from "utils/Constant";
import { Chart } from "react-google-charts";
import { googleChartData } from "Data/Charts/GoogleChart";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const PieChart2Class = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeading smallHeading={`${PieChart}${2}`} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart
              width={"100%"}
              height={"400px"}
              chartType={"PieChart"}
              loader={<div>{"Loading Chart"}</div>}
              data={googleChartData.GooglePieChart2.data}
              options={googleChartData.GooglePieChart2.option && { is3D: true }}
              rootProps={googleChartData.GooglePieChart2.rootProps}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart2Class;
