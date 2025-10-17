import { Button, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Action, AnotherAction, Dropdown, Header } from "utils/Constant";

const NormalButtonGroups = () => {
  return (
    <div className="m-b-30">
      <ButtonGroup>
        <Button color="primary"><i className="fa fa-bold"></i></Button>
        <Button color="secondary"><i className="fa fa fa-italic"></i></Button>
        <ButtonGroup>
          <UncontrolledDropdown>
            <DropdownToggle color="light">{Dropdown}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>{Header}</DropdownItem>
              <DropdownItem disabled>{Action}</DropdownItem>
              <DropdownItem>{AnotherAction}</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>{AnotherAction}</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </ButtonGroup>
      </ButtonGroup>
    </div>
  );
};

export default NormalButtonGroups;
