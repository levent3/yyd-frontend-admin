import { Radar } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { RadarChart } from 'utils/Constant';
import { radarChartData } from 'Data/Charts/ChartJsData';
import CommonCardHeading from 'CommonElements/CommonCardHeading';

const RadarChartClass = () => {
  return (
    <Col xl={6} md={12} className='box-col-12' >
      <Card>
      <CommonCardHeading smallHeading={RadarChart} />
        <CardBody className='radar-chartjs'>
          <Radar id="myRadarGraph" data={radarChartData} width={724} height={362} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadarChartClass;