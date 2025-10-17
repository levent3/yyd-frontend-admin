import { Card } from "reactstrap";
import { FollowersGrowth, WeeklyMonDropdown } from "utils/Constant";
import FollowerChart from "./FollowerChart";
import CommonHeaderWithDropDown from "@/components/Dashboard/common/CommonHeaderWithDropDown";

const FollowerGrowth = () => {
  return (
    <Card className="growth-wrap widget-growth">
      <CommonHeaderWithDropDown headerClassName="pb-0" dropDownIcon={true} heading={FollowersGrowth} dropDownList={WeeklyMonDropdown} caret={false} dropDownToggleClassName="dropdown-toggle" dropDownClass="dropdown icon-dropdown" />
      <FollowerChart />
    </Card>
  );
};

export default FollowerGrowth;
