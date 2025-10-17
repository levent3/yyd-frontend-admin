import { Row } from "reactstrap";
import { AreaChart, BarChart2, BasicBarChart, MaterialDesign, PieChart, SliceVisibilityThreshold, StackingAreaChart } from "utils/Constant";
import PieChartClass from "./common/PieChart";
import PieChart2Class from "./PieChart2";
import PieChart3Class from "./PieChart3";
import PieChart4Class from "./PieChart4";
import PieChart5Class from "./PieChart5";
import PieChart6Class from "./PieChart6";
import ComboChartClass from "./ComboChart";
import { googleChartData } from "Data/Charts/GoogleChart";
import { AreaChart2 } from "./AreaChart2";
import { LineChartGoogle } from "./LineChartGoogle";

const GoogleChartContainer = () => {
  return (
    <Row>
      <PieChartClass data={googleChartData.GoogleAreaChart} title={AreaChart} />
      <AreaChart2 />
      <PieChartClass data={googleChartData.GoogleMaterialDesignChart} title={MaterialDesign} />
      <PieChartClass data={googleChartData.GoogleBasicbarChart} title={BasicBarChart} />
      <PieChart6Class />
      <LineChartGoogle/>
      <ComboChartClass />
      <PieChartClass data={googleChartData.GoogleBarChart2} title={BarChart2} colClass="col-sm-12" />
      <PieChartClass data={googleChartData.GooglePieChart1} title={`${PieChart}1`} />
      <PieChart2Class />
      <PieChart3Class />
      <PieChart4Class />
      <PieChart5Class />
      <PieChartClass data={googleChartData.GoogleSliceCharts} title={SliceVisibilityThreshold} />
    </Row>
  );
};

export default GoogleChartContainer;
