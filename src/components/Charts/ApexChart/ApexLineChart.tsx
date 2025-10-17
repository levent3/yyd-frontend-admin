import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { ColumnChart } from 'utils/Constant';
import { apexLineWithAnnotationCharts } from 'Data/Charts/ApexChart';
import CommonCardHeading from 'CommonElements/CommonCardHeading';

const ApexLineChartClass = () => {
  return (
      <Col sm={12}>
        <Card>
          <CommonCardHeading smallHeading={ColumnChart} />
          <CardBody>
            <div id='annotationchart'>
              <Chart options={apexLineWithAnnotationCharts} series={apexLineWithAnnotationCharts.series} type="line" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default ApexLineChartClass;