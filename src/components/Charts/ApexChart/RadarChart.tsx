import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { RadarChart } from 'utils/Constant';
import { apexRadarPolygonfillCharts } from 'Data/Charts/ApexChart';
import CommonCardHeading from 'CommonElements/CommonCardHeading';

const RadarChartClass = () => {
  return (
      <Col sm={12} xl={6} className='box-col-6'>
        <Card>
          <CommonCardHeading smallHeading={RadarChart} />
          <CardBody>
            <div id='radarchart'>
              <Chart options={apexRadarPolygonfillCharts} series={apexRadarPolygonfillCharts.series} type="radar" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default RadarChartClass;