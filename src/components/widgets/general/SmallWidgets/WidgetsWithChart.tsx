import { widgetsWithChartData } from "Data/widgets/general";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const WidgetsWithChart = () => {
  return (
    <>
      {widgetsWithChartData.map((data, index) => (
        <Col sm={6} key={index}>
          <Card className="widget-1 widget-with-chart mb-xl-0">
            <CardBody>
              <div>
                <h4 className="mb-1">{data.amount}</h4>
                <span className="f-light">{data.tittle}</span>
              </div>
              <div className="profit-chart">
                <ReactApexChart
                  height={150}
                  type={data.tittle === "Profit" ? "line" : "bar"}
                  options={data.chartOption}
                  series={data.chartOption.series}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default WidgetsWithChart;
