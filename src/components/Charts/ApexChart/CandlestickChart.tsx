import { Card, CardBody, Col } from 'reactstrap';
import { CandlestickChart } from 'utils/Constant';
import Chart from 'react-apexcharts';
import { apexCandleStickCharts } from 'Data/Charts/ApexChart';
import CommonCardHeading from 'CommonElements/CommonCardHeading';

const CandlestickChartClass = () => {
  return (
      <Col sm={12} xl={12} className='box-col-12'>
        <Card>
          <CommonCardHeading smallHeading={CandlestickChart} />
          <CardBody >
            <div id='candlestick'>
              <Chart options={apexCandleStickCharts} series={apexCandleStickCharts.series} type="candlestick" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default CandlestickChartClass;