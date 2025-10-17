import { shipIngNavFormData, verticalValidationWizardNavData } from "Data/Forms/Layout";
import { Nav, NavItem, NavLink } from "reactstrap";
interface propsType {
  callbackActive: (val: number | undefined) => void;
  activeTab: number | undefined;
}

const NavComponent = ({ callbackActive, activeTab }: propsType) => {
  const handleTab = (id: number | undefined) => {
    if (id !== undefined) {
      callbackActive(id);
    }
  };
  return (
    <Nav className="nav-pills horizontal-options shipping-options">
      {shipIngNavFormData.map((data, index) => (
        <NavItem key={index}>
          <NavLink
            className={` b-r-0 ${activeTab === index + 1 ? "active" : ""}`}
            onClick={() => handleTab(data.activeTab)}
          >
            <div className="cart-options">
              <div className="stroke-icon-wizard">
                <i className={`fa ${data.iconClassName}`} />
              </div>
              <div className="cart-options-content">
                <h6>{data.tittle}</h6>
              </div>
            </div>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavComponent;
