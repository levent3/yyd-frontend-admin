import { Bar } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { BarChart } from 'utils/Constant';
import { barChartData, barChartOptions } from 'Data/Charts/ChartJsData';
import CommonCardHeading from 'CommonElements/CommonCardHeading';


const BarChartClass = () => {
  return (
      <Col xl={6} md={12} className='box-col-12'>
        <Card>
        <CommonCardHeading smallHeading={BarChart} />
          <CardBody className="chart-block">
            <Bar data={barChartData} options={barChartOptions} width={778} height={400} />
          </CardBody>
        </Card>
      </Col>
  );
};

export default BarChartClass;