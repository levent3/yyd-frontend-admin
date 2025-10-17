import { CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { AcademicPerformanceHeading } from "utils/Constant";
import { useState } from "react";

export const CommonHeader = ({title}:{title?:string}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <CardHeader className="card-no-border">
      <div className="header-top">
        <h5>{title}</h5>
        <Dropdown className="icon-dropdown" isOpen={open} toggle={toggle}>
          <DropdownToggle color="" id="performance_dropdown" className="btn border-0">
            <i className="icon-more-alt" onClick={toggle}/>
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem>{`Today`}</DropdownItem>
            <DropdownItem>{`Tomorrow`}</DropdownItem>
            <DropdownItem>{`Yesterday`}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </CardHeader>
  );
};
