import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const CommonDrop = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Dropdown className="icon-dropdown" isOpen={open} toggle={toggle}>
      <DropdownToggle color="" id="performance_dropdown" className="btn border-0 pe-1">
        <i className="icon-more-alt" onClick={toggle} />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem>{`Today`}</DropdownItem>
        <DropdownItem>{`Tomorrow`}</DropdownItem>
        <DropdownItem>{`Yesterday`}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CommonDrop;
