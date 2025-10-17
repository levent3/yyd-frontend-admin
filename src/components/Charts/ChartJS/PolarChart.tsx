import { PolarArea } from "react-chartjs-2";
import { Col, Card, CardBody } from "reactstrap";
import { PolarChart } from "utils/Constant";
import { polarData, polarOption } from "Data/Charts/ChartJsData";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const PolarChartClass = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeading smallHeading={PolarChart} />
        <CardBody className="chart-block-container radar-chartjs polar-chart-wrapper">
          <PolarArea
            data={polarData}
            options={polarOption}
            width={778}
            height={400}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PolarChartClass;
