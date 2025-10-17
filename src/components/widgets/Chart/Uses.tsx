import CommonCardHeading from "CommonElements/CommonCardHeading";
import { optionsUserChart } from "Data/widgets/chart";
import Charts from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import { UsesHeading } from "utils/Constant";

const Uses = () => {
  return (
    <Col xl={7} lg={12} className="xl-50 box-col-12">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeading smallHeading={UsesHeading} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs={12}>
                  <div id="chart-widget9">
                    <Charts options={optionsUserChart} series={optionsUserChart.series} height={320} type="bubble"/>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default Uses;
