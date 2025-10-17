import { lineChart1 } from "Data/widgets/chart";
import Charts from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import TotalSaleCardBody from "./TotalSaleCardBody";

const TotalSale = () => {
  return (
    <Col xl={4} md={12} className="box-col-12">
      <Card className="o-hidden">
        <div className="chart-widget-top">
          <TotalSaleCardBody />
          <div>
            <div id="chart-widget1">
              <Charts options={lineChart1} series={lineChart1.series} height={170} type="area"/>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default TotalSale;
