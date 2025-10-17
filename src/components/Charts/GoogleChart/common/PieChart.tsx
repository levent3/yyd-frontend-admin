import { Card, CardBody, Col } from "reactstrap";
import { Chart } from "react-google-charts";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { commonPropsType } from "Types/ChartType";

const PieChartClass = ({ data, title, colClass }: commonPropsType) => {
  return (
    <Col className={colClass ? "col-sm-12" : "col-sm-12 col-xl-6 col-12"}>
      <Card>
        <CommonCardHeading smallHeading={title} />
        <CardBody className="chart-block ">
          <div className="chart-overflow" id="pie-chart1">
            <Chart
              width="100%"
              height={data?.height}
              chartType={data?.chartType}
              loader={<div>{"Loading Chart"}</div>}
              data={data?.data}
              options={data?.options}
              rootProps={data?.rootProps}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChartClass;
