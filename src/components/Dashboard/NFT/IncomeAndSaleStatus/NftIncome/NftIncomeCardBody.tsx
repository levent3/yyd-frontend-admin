import ReactApexChart from "react-apexcharts";
import { incomeOptions } from '../../../../../../Data/Dashboard/NFT/Chart';
import { CardBody } from "reactstrap";

const NftIncomeCardBody = () => {
  return (
    <CardBody className="pt-0">
      <div className="income-chart-wrapper">
        <div id="income-chart" style={{ minHeight: 265 }}>
          <ReactApexChart
            type="area"
            height={incomeOptions.chart?.height}
            options={incomeOptions}
            series={incomeOptions.series}
          />
        </div>
      </div>
    </CardBody>
  );
};

export default NftIncomeCardBody;
