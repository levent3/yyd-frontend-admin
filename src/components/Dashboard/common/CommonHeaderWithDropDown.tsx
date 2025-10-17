import { commonHeaderWithDropDownPropsType } from "Types/DashboardType";
import { useState } from "react";
import {
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
const CommonHeaderWithDropDown = ({
  heading,
  dropDownList,
  headerClassName,
  headingClassName,
  caret,
  dropDownClass,
  dropDownIcon,
  dropDownToggleClassName,
  tag,
}: commonHeaderWithDropDownPropsType) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <CardHeader
      className={`card-no-border ${headerClassName ? headerClassName : ""}`}
    >
      <div className="header-top">
        <h5 className={headingClassName ? headingClassName : ""}>{heading}</h5>
        <div className={`${dropDownClass ? dropDownClass : ""}`}>
          <Dropdown isOpen={open} toggle={toggle}>
            <DropdownToggle
              className={dropDownToggleClassName ? dropDownToggleClassName : ""}
              color="transparent"
              caret={caret ? true : false}
            >
              {dropDownIcon ? (
                <i className="icon-more-alt" />
              ) : tag ? (
                tag
              ) : (
                dropDownList[0]
              )}
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              {dropDownList.map((item, index) => (
                <DropdownItem key={index}>{item}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </CardHeader>
  );
};

export default CommonHeaderWithDropDown;
