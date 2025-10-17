import CustomerSidebarCardHeader from "./CustomerSidebarCardHeader";
import { Href, OrderDetailsHeader, PlaceOrder, SelectCustomer } from "../../../../../utils/Constant/index";
import { Button, CardBody, Card } from 'reactstrap';
import OrderDetails from "./OrderDetails";
import TotalItems from "./TotalItems";
import PaymentMethods from "./PaymentMethods";
import { useState } from "react";

const CustomerSidebar = () => {
  const [sideBarOn, setSideBarOn] = useState(false)
  return (
    <div className="md-sidebar h-100">
      <a className="btn btn-primary md-sidebar-toggle" href={Href} onClick={()=>setSideBarOn(!sideBarOn)} >{OrderDetailsHeader}</a>
      <div className={`md-sidebar-aside custom-scrollbar responsive-order-details ${sideBarOn?"open":""}`}>
        <Card className="customer-sticky">
          <CustomerSidebarCardHeader />
          <CardBody className="pt-0 order-details">
            <select className="form-select f-w-400 f-14 text-gray py-2">
              <option selected disabled>{SelectCustomer}</option>
              <option value={1}>Brooklyn Simmons</option>
              <option value={2}>Savannah Nguyen</option>
              <option value={3}>Esther </option>
            </select>
            <h5 className="m-0">{OrderDetailsHeader}</h5>
            <OrderDetails />
            <TotalItems />
            <PaymentMethods />
            <div className="place-order">
              <Button color="primary" className="btn-hover-effect w-100 f-w-500">{PlaceOrder}</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CustomerSidebar;
