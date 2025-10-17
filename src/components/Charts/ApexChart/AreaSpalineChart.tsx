import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaSpalineChart } from 'utils/Constant';
import { areaSpaline } from 'Data/Charts/ApexChart';
import CommonCardHeading from 'CommonElements/CommonCardHeading';

const AreaSpalineChartClass = () => {
  return (
      <Col sm={12} xl={6} className='box-col-6'>
        <Card>
          <CommonCardHeading smallHeading={AreaSpalineChart} />
          <CardBody>
            <div id='basic-apex'>
              <Chart options={areaSpaline} series={areaSpaline.series} height="350" type="area" />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default AreaSpalineChartClass;