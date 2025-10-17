import { commonDropDownPropsType } from "Types/ButtonsType";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { AnotherAction, ButtonDropdown } from "utils/Constant";


const CommonDropDown = ({color,className}:commonDropDownPropsType) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle color={color} caret className={className ?className:""}>
        {ButtonDropdown}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{AnotherAction}</DropdownItem>
        <DropdownItem>{AnotherAction}</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default CommonDropDown;
