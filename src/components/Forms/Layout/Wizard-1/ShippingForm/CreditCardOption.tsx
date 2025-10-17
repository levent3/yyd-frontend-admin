import { paymentMethodOptionPropsType } from "Types/FormLayoutType";
import CreditCardForm from "./CreditCardForm";
import { CreditCard, CreditCardText, ImgPath } from "utils/Constant";
import Image from "next/image";
import { Col, FormGroup, Input, Label } from "reactstrap";

const CreditCardOption = ({paymentMethodName,getUserData,}: paymentMethodOptionPropsType) => {
  return (
    <Col xs={12}>
      <div className="card-wrapper border rounded-3 pay-info light-card">
        <div>
          <div>
            <FormGroup check className="radio radio-primary">
              <Input id="shipping-choose6" type="radio" name="paymentMethodName" value="creditCard" checked={paymentMethodName === "creditCard"} onChange={getUserData}/> 
              <Label className="form-check-label mb-0 f-w-500" htmlFor="shipping-choose6">{CreditCard}</Label>
            </FormGroup>
            <p>{CreditCardText}</p>
          </div>
          <div>
            <Image
              width={101}
              height={50}
              src={`${ImgPath}/forms/credit-card.png`}
              alt="card"
            />
          </div>
        </div>
        <CreditCardForm />
      </div>
    </Col>
  );
};

export default CreditCardOption;
