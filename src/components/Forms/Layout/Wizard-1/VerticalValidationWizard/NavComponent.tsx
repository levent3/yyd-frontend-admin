import { verticalValidationWizardNavData } from "Data/Forms/Layout";
import { verticalFormPropsType } from "Types/FormLayoutType";
import { Nav, NavItem, NavLink } from "reactstrap";


const NavComponent = ({ callbackActive,activeTab }: verticalFormPropsType) => {
  return (
    <Nav className="flex-column header-vertical-wizard">
      {verticalValidationWizardNavData.map((data, index) => (
        <NavItem key={index}>
        <NavLink
          className={activeTab === index+1 ? "active" : ""}
          onClick={() => {callbackActive(index + 1);}}
        >
          <div className="vertical-wizard">
            <div className="stroke-icon-wizard">
              <i className={`fa ${data.iconClassName}`} />
            </div>
            <div className="vertical-wizard-content">
              <h6>{data.tittle}</h6>
              <p>{data.tittleInforMation}</p>
            </div>
          </div>
        </NavLink>
      </NavItem>
      ))}
    </Nav>
  );
};

export default NavComponent;
