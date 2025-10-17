import { Card, CardBody, Col } from 'reactstrap';
import Chart from 'react-apexcharts';
import { RadialBarChart } from 'utils/Constant';
import { apexRadialBarChart } from 'Data/Charts/ApexChart';
import CommonCardHeading from 'CommonElements/CommonCardHeading';

const RadialBarChartClass = () => {
  return (
      <Col sm={12} xl={6} className='box-col-6'>
        <Card>
          <CommonCardHeading smallHeading={RadialBarChart} />
          <CardBody>
            <div id='circlechart'>
              <Chart options={apexRadialBarChart} series={apexRadialBarChart.series} type="radialBar" height={380} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default RadialBarChartClass;