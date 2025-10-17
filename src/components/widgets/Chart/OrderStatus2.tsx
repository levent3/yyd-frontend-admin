import CommonCardHeading from "CommonElements/CommonCardHeading";
import { optionsLineChart } from "Data/widgets/chart";
import Charts from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import { OrderStatusHeading } from "utils/Constant";

const OrderStatus2 = () => {
  return (
    <Col xl={7} lg={12} className="box-col-6">
      <Card>
        <CommonCardHeading smallHeading={OrderStatusHeading} />
        <CardBody>
          <div className="chart-container">
            <Charts options={optionsLineChart} series={optionsLineChart.series} height={350} type="line"/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderStatus2;
