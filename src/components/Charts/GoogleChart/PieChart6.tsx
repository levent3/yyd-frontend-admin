import { Card, CardBody,  Col } from "reactstrap";
import { RotatingPieChart } from "utils/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { PieChart6Data, PieChart6option } from "Data/Charts/GoogleChart";

const PieChart5Class = () => {
  return (
    <Col sm={12}>
      <Card>
      <CommonCardHeading smallHeading={RotatingPieChart} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart
              width={"100%"}
              height={"300px"}
              chartType={"Gantt"}
              loader={<div>{"Loading Chart"}</div>}
              data={PieChart6Data}
              options={PieChart6option}
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

export default PieChart5Class;