import CommonCardHeading from "CommonElements/CommonCardHeading";
import { marketChart } from "Data/widgets/chart";
import Charts from "react-apexcharts";
import { MonthlyHistoryHeading } from "utils/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";

const MonthlyHistory = () => {
  return (
    <Col md={12} className="box-col-12">
      <Card className="o-hidden">
        <CommonCardHeading smallHeading={MonthlyHistoryHeading} />
        <div className="bar-chart-widget">
          <CardBody className="bottom-content">
            <Row>
              <Col xs={12}>
                <Charts options={marketChart} series={marketChart.series} type="bar" height={360}/>
              </Col>
            </Row>
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};

export default MonthlyHistory;
