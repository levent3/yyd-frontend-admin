import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { BarChart } from 'utils/Constant';
import { apexBarChart } from 'Data/Charts/ApexChart';
import CommonCardHeading from 'CommonElements/CommonCardHeading';

const BarChartClass = () => {
  return (
      <Col sm={12} xl={6} className='box-col-6'>
        <Card>
        <CommonCardHeading smallHeading={BarChart} />
          <CardBody>
            <div id='basic-bar'>
              <Chart options={apexBarChart} series={apexBarChart.series} type="bar" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default BarChartClass;