import CommonCardHeading from "CommonElements/CommonCardHeading";
import { chartDatas } from "Data/widgets/chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import {  OrderStatusHeading } from "utils/Constant";

const OrderStatus = () => {
  return (
    <Col xl={6} lg={12} className="box-col-6 xl-50">
      <Card>
        <CommonCardHeading smallHeading={OrderStatusHeading} />
        <CardBody>
          <div className="chart-container progress-chart">
            {chartDatas.map((data, index) => (
              <ReactApexChart key={index} options={data} series={data.series} type="bar" id={`progress${index + 1}`} height={70}/>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderStatus;
