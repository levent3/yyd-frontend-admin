import SchoolIncomeList from "./SchoolIncomeList";
import ReactApexChart from "react-apexcharts";
import { incomeChartOption } from "Data/Dashboard/SchoolManagement/Chart";
import { CardBody } from "reactstrap";

const SchoolIncomeCardBody = () => {
  return (
    <CardBody className="pt-0">
      <div className="income-wrapper">
        <SchoolIncomeList />
        <div className="main-income-chart">
          <div id="income_chart" style={{ minHeight: 280 }}>
            <ReactApexChart options={incomeChartOption} height={265} type="line" series={incomeChartOption.series}/>
          </div>
        </div>
      </div>
    </CardBody>
  );
};

export default SchoolIncomeCardBody;
