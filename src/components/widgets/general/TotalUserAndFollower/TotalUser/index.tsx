import DropdownCommon from "CommonElements/Dashboard/DropdownCommon";
import React from "react";
import { Card, CardHeader } from "reactstrap";
import { TotalUsers, WeeklyMonDropdown } from "utils/Constant";
import TotalUserBody from "./TotalUserBody";
import CommonHeaderWithDropDown from "@/components/Dashboard/common/CommonHeaderWithDropDown";

const TotalUser = () => {
  return (
    <Card>
      <CommonHeaderWithDropDown
        headerClassName="pb-0"
        dropDownIcon={true}
        heading={TotalUsers}
        dropDownList={WeeklyMonDropdown}
        caret={false}
        dropDownClass="dropdown icon-dropdown"
        dropDownToggleClassName="dropdown-toggle"
      />
      <TotalUserBody />
    </Card>
  );
};

export default TotalUser;
