import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import Chart from "react-google-charts";
import { AreaChartTwoData, AreaChartTwoDataOption } from "Data/Charts/GoogleChart";

export const AreaChart2 = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeading smallHeading={`Area Chart 2`} />
        <CardBody className="p-0 chart-block">
          <div className="chart-overflow" id="area-chart2">
            <Chart chartType="AreaChart" width="100%" height={455} data={AreaChartTwoData} options={AreaChartTwoDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
