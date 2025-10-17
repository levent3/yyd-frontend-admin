import { Doughnut } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { DoughnutChart } from 'utils/Constant';
import { doughnutData, doughnutOption } from 'Data/Charts/ChartJsData';
import CommonCardHeading from 'CommonElements/CommonCardHeading';

const DoughnutChartClass = () => {

  return (
    <Col xl="6" md="12" className='box-col-12'  >
      <Card>      
      <CommonCardHeading smallHeading={DoughnutChart} />
        <CardBody className="chart-block chart-vertical-center">
          <Doughnut data={doughnutData} options={doughnutOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DoughnutChartClass;