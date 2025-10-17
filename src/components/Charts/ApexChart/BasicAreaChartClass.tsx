import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { BasicAreaChart } from 'utils/Constant';
import { apexAreaChart } from 'Data/Charts/ApexChart';
import CommonCardHeading from 'CommonElements/CommonCardHeading';

const BasicAreaChartClass = () => {
  return (
      <Col sm={12} xl={6} className='box-col-6'>
        <Card>
          <CommonCardHeading smallHeading={BasicAreaChart} />
          <CardBody>
            <div id='basic-apex'>
              <Chart options={apexAreaChart} series={apexAreaChart.series} type="area" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default BasicAreaChartClass;