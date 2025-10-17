import { Fragment } from "react";
import { Col, Input, Label } from "reactstrap";
import { SelectPaymentMethod } from "utils/Constant";

const PaymentMethod = () => {
  const PaymentMethodName = ["Visa", "MasterCard", "Paypal", "G-pay", "Bitpay"];

  return (
    <Col sm={6}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{SelectPaymentMethod}</h6>
        {PaymentMethodName.map((data, index) => (
          <Fragment key={index}>
            <Label className="d-block" htmlFor={`edo-payment-${index}`} />
            <Input className="radio_animated" id={`edo-payment-${index}`} type="radio" name="rdo-ani" defaultChecked={data === "Paypal" ? true : false}/>
            {data}
          </Fragment>
        ))}
      </div>
    </Col>
  );
};

export default PaymentMethod;
