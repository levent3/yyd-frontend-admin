import { Card, CardBody, Col, Row } from "reactstrap";
import CurrentCart from "./CurrentCart";
import NavComponent from "./NavComponent";
import { useCallback, useState } from "react";
import ShippingFormTabContent from "./ShippingFormTabContent";
import CardHead from "CommonElements/CardHead";
import { ShippingFormHeading } from "utils/Constant";
import { shippingFormHeadingData } from "Data/Forms/Layout";

const ShippingForm = () => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
    setActiveTab(tab);
  }, []);

  return (
    <Col md={12}>
      <Card>
        <CardHead title={ShippingFormHeading} subTitle={shippingFormHeadingData}/>
        <CardBody>
          <Row className="shopping-wizard">
            <Col xs={12}>
              <Row className="shipping-form g-5">
                <Col xl={8} className="shipping-border">
                  <NavComponent callbackActive={callback} activeTab={activeTab}/>
                  <ShippingFormTabContent activeTab={activeTab} callbackActive={callback}/>
                </Col>
                <CurrentCart />
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShippingForm;
