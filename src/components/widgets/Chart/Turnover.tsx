import CommonCardHeading from "CommonElements/CommonCardHeading";
import { optionsTurnOverChart } from "Data/widgets/chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import { TurnOverHeading } from "utils/Constant";

const Turnover = () => {
  return (
    <Col xl={5} lg={12} className="xl-50">
      <Card>
        <CommonCardHeading smallHeading={TurnOverHeading} />
        <CardBody>
          <div className="chart-container">
            <Row>
              <Col xs={12}>
                <ReactApexChart options={optionsTurnOverChart} series={optionsTurnOverChart.series} type="area" id="chart-widget7" height={320} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Turnover;
