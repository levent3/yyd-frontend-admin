import { TabContent, TabPane } from "reactstrap";
import BillingForm from "./BillingForm";
import ShippingFormContent from "./ShippingFormContent";
import PaymentForm from "./PaymentForm";
import SubmitShippingForm from "./SubmitShippingForm";
import { shippingFormTabContentPropsType } from "Types/FormLayoutType";

const ShippingFormTabContent = ({ activeTab, callbackActive }: shippingFormTabContentPropsType) => {
  return (
    <TabContent className="dark-field shipping-content" activeTab={activeTab}>
      <TabPane tabId={1}>
        <BillingForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={2} className="shipping-wizard">
        <ShippingFormContent callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={3}>
        <PaymentForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={4} className="finish-wizard1">
        <SubmitShippingForm />
      </TabPane>
    </TabContent>
  );
};

export default ShippingFormTabContent;
