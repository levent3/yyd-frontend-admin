import { CardBody } from "reactstrap";
import NFTStatisticsList from "./NFTStatisticsList";
import ReactApexChart from "react-apexcharts";
import { statisticOptions } from "Data/Dashboard/NFT/Chart";

const NFTStatisticsCardBody = () => {
  return (
    <CardBody className="pt-0">
      <NFTStatisticsList />
      <div className="statistic-chart-wrap">
        <div id="statistic-chart" style={{ minHeight: 185 }}>
          <ReactApexChart options={statisticOptions} type="area" height={170} series={statisticOptions?.series}/>
        </div>
      </div>
    </CardBody>
  );
};

export default NFTStatisticsCardBody;
