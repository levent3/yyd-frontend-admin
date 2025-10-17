import { CardHeader } from "reactstrap";
import { CreatePlus, Customer, Href } from "utils/Constant";
import CustomerSidebarModal from "./CustomerSidebarModal";
import { useState } from "react";

const CustomerSidebarCardHeader = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <CardHeader className="card-no-border pb-3">
      <div className="header-top border-bottom pb-3">
        <h5 className="m-0">{Customer} </h5>
        <div className="card-header-right-icon create-right-btn">
          <a onClick={toggle} className="btn badge-light-primary f-w-500 f-12" href={Href}>{CreatePlus}</a>
        </div>
        <CustomerSidebarModal modal={modal} toggle={toggle} />
      </div>
    </CardHeader>
  );
};

export default CustomerSidebarCardHeader;
