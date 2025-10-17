import { Card, CardBody, Col } from "reactstrap";
import { LineChart } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { Chart } from "react-google-charts";
import { LineChartData, LineChartDataOption } from "Data/Charts/ChartJsData";

export const LineChartGoogle = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeading smallHeading={LineChart} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="line-chart">
            <Chart chartType="Line" width="100%" height="500px" data={LineChartData} options={LineChartDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
