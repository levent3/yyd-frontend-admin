import { Line } from "react-chartjs-2";
import { Col, Card, CardBody } from "reactstrap";
import { LineChart2 } from "utils/Constant";
import { lineChart2Data, lineChart2option } from "Data/Charts/ChartJsData";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const LineChart2Class = () => {
  return (
    <Col xl={6} md={12} className="box-col-12">
      <Card className="height-equal">
        <CommonCardHeading smallHeading={LineChart2} />
        <CardBody className="chart-block">
          <Line data={lineChart2Data} options={lineChart2option} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChart2Class;
