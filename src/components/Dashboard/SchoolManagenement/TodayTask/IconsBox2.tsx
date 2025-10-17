import { dropDownIconsList } from "Data/Dashboard/SchoolManagement";
import { useState } from "react";
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle,} from "reactstrap";
const IconsBox2 = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <td className="icons-box-2 ps-0">
      <div className="open-options">
        <Dropdown isOpen={open} toggle={toggle}>
          <DropdownToggle color="transparent" className="square-white">
            <i className="fa fa-ellipsis-h" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-block dropdown-menu-end">
            {dropDownIconsList.map((data, index) => (
              <DropdownItem key={index} className="square-white border-top-0">
                {data.icon}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </td>
  );
};

export default IconsBox2;
