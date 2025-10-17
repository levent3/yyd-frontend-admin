import DropdownCommon from "CommonElements/Dashboard/DropdownCommon";
import SvgIcon from "CommonElements/Icons/SvgIcon";
import { CardHeader } from "reactstrap";
import { DailyDropdown,Visitors } from "utils/Constant";

const VisitorsCardHeader = () => {
  return (
    <CardHeader className="card-no-border pb-0">
      <div className="header-top">
        <h5 className="m-0">
          {Visitors}
          <span className="f-14 font-primary f-w-500 ms-1">
            <SvgIcon iconId="user-visitor" className="svg-fill me-1" />(+2.8)
          </span>
        </h5>
        <div className="card-header-right-icon">
          <DropdownCommon icon iconName="icon-more-alt" dropdownMain={{ className: "icon-dropdown", direction: "start" }} options={DailyDropdown} btn={{ tag: "span" }}/>
        </div>
      </div>
    </CardHeader>
  );
};

export default VisitorsCardHeader;
