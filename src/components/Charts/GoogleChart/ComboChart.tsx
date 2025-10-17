import { Card, CardBody, Col } from "reactstrap";
import { ComboChart } from "utils/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { comboChartClassData, comboChartClassOption } from "Data/Charts/GoogleChart";

const ComboChartClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeading smallHeading={ComboChart} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart
              width={"100%"}
              height={"300px"}
              chartType={"ComboChart"}
              loader={<div>{"Loading Chart"}</div>}
              data={comboChartClassData}
              options={comboChartClassOption}
              rootProps={{
                "data-testid": "1",
              }}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ComboChartClass;
