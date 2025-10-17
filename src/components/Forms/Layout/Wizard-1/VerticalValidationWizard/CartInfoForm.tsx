import { ChangeEvent, useState } from "react";
import {
  Button,
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import ShowError from "../common/ShowError";
import { Next, Previous, SelectPaymentMethod, Submit } from "utils/Constant";
import { verticalValidationWizardFormPropsType } from "Types/FormLayoutType";

const CartInfoForm = ({
  activeCallBack,
}: verticalValidationWizardFormPropsType) => {
  const [cartInfoForm, setCartInfoForm] = useState({
    recipientUserName: "",
    userName: "",
    cardNumber: "",
    expirationDate: "",
    cvvNumber: "",
    documentationName: "",
  });
  const {
    recipientUserName,
    userName,
    cardNumber,
    expirationDate,
    cvvNumber,
    documentationName,
  } = cartInfoForm;

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value =
      name == "rememberNextTime"
        ? event.target.checked
        : name == "documentationName"
        ? event.target.files && event.target.files[0].name
        : event.target.value;
    setCartInfoForm({ ...cartInfoForm, [name]: value });
  };

  const handleNextButton = () => {
    if (
      recipientUserName !== "" &&
      userName !== "" &&
      cardNumber !== "" &&
      expirationDate !== "" &&
      cvvNumber !== "" &&
      documentationName !== ""
    ) {
      activeCallBack(3);
    } else {
      ShowError();
    }
  };
  const paymentModeName = ["Visa", "MasterCard", "paypal"];
  return (
    <form className="row g-3 needs-validation custom-input" noValidate>
      <Col xxl={6}>
        <div className="card-wrapper border rounded-3 checkbox-checked">
          <h6 className="sub-title">{SelectPaymentMethod}</h6>
          <div className="radio-form">
            {paymentModeName.map((data, index) => (
              <FormGroup check key={index}>
                <Input
                  id={`flexRadioDefault${index}`}
                  type="radio"
                  name="paymentMethod"
                  value="visa"
                />
                <Label
                  className="form-check-label"
                  htmlFor={`flexRadioDefault${index}`}
                >
                  {data}
                </Label>
              </FormGroup>
            ))}
          </div>
        </div>
      </Col>
      <Col xxl={6}>
        <Row>
          <Col xs={12}>
            <InputGroup className="mb-3">
              <Input
                type="text"
                placeholder="Recipient's username"
                name="recipientUserName"
                value={recipientUserName}
                onChange={getUserData}
              />
              <Button outline color="secondary">
                {Submit}
              </Button>
            </InputGroup>
          </Col>
          <Col xs={12}>
            <InputGroup>
              <InputGroupText>@</InputGroupText>
              <Input
                type="text"
                placeholder="Username"
                name="userName"
                value={userName}
                onChange={getUserData}
              />
            </InputGroup>
          </Col>
        </Row>
      </Col>
      <Col md={4} sm={6}>
        <Label>Card Number</Label>
        <Input
          type="number"
          placeholder="xxxx xxxx xxxx xxxx"
          name="cardNumber"
          value={cardNumber}
          onChange={getUserData}
        />
      </Col>
      <Col md={4} sm={6}>
        <Label htmlFor="validationDates">Expiration(MM/YY)</Label>
        <Input
          id="validationDates"
          type="number"
          placeholder="xx/xx"
          name="expirationDate"
          value={expirationDate}
          onChange={getUserData}
        />
      </Col>
      <Col md={4} sm={6}>
        <Label htmlFor="cvvNumber-b">CVV</Label>
        <Input
          id="cvvNumber-b"
          type="number"
          name="cvvNumber"
          value={cvvNumber}
          onChange={getUserData}
        />
      </Col>
      <Col md={12} sm={6}>
        <Label htmlFor="formFile2">Upload Documentation</Label>
        <Input
          id="formFile2"
          type="file"
          name="documentationName"
          onChange={getUserData}
        />
      </Col>
      <Col xs={12}>
        <FormGroup check className="mb-0">
          <Input id="invalidCheck-b" type="checkbox" required />
          <Label className="form-check-label" htmlFor="invalidCheck-b">
            All the above information is correct
          </Label>
        </FormGroup>
      </Col>
      <Col
        xs={12}
        className="d-flex justify-content-end align-items-center gap-2"
      >
        <Button onClick={() => activeCallBack(1)} color="primary">
          {Previous}
        </Button>
        <Button onClick={handleNextButton} color="primary">
          {Next}
        </Button>
      </Col>
    </form>
  );
};

export default CartInfoForm;
