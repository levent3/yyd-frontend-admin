import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { optionsVisitorChartWidget } from "Data/widgets/general";
import VisitorsCardHeader from "./VisitorsCardHeader";

const VisitorsCard = () => {
  return (
    <Col xxl={5} xl={3} md={12} className="box-col-12">
      <Card className="visitor-card">
        <VisitorsCardHeader />
        <CardBody className="pt-3">
          <div className="visitors-container">
            <ReactApexChart
              height={270}
              type="bar"
              options={optionsVisitorChartWidget}
              series={optionsVisitorChartWidget.series}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VisitorsCard;
