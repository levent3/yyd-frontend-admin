import { paymentMethodOptionPropsType } from "Types/FormLayoutType";
import Image from "next/image";
import React from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { ImgPath, PaypalOption } from "utils/Constant";

const PayPalOption = ({paymentMethodName,getUserData,}: paymentMethodOptionPropsType) => {
  return (
    <Col xs={12}>
      <div className="card-wrapper border rounded-3 light-card">
        <div>
          <FormGroup check className="radio radio-primary">
            <Input id="shipping-choose5" type="radio" name="paymentMethodName" value="Paypal" checked={paymentMethodName === "Paypal"} onChange={getUserData}/>
            <Label className="form-check-label mb-0 f-w-500" htmlFor="shipping-choose5">Paypal</Label>
          </FormGroup>
          <p>{PaypalOption}</p>
        </div>
        <div>
          <Image width={145} height={50} src={`${ImgPath}/checkout/paypal.png`} alt="paypal"/>
        </div>
      </div>
    </Col>
  );
};

export default PayPalOption;
