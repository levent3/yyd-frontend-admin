import { useState, ChangeEvent } from "react";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import ShowError from "../common/ShowError";
import { verticalValidationWizardFormPropsType } from "Types/FormLayoutType";

const YourInfoForm = ({
  activeCallBack,
}: verticalValidationWizardFormPropsType) => {
  const [yourInfoForm, setYourInfoForm] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    state: "",
    zip: "",
  });
  const { firstName, lastName, contact, email, state, zip } = yourInfoForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value =
      name == "rememberNextTime" ? event.target.checked : event.target.value;
    setYourInfoForm({ ...yourInfoForm, [name]: value });
  };
  const handleNextButton = () => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      contact !== "" &&
      email !== "" &&
      state !== "" &&
      zip !== ""
    ) {
      activeCallBack(2);
    } else {
      ShowError();
    }
  };

  return (
    <form className="row g-3 needs-validation custom-input" noValidate>
      <Col xxl={4} sm={6}>
        <Label>
          First name<span className="txt-danger">*</span>
        </Label>
        <Input
          type="text"
          placeholder="Enter first name"
          name="firstName"
          value={firstName}
          onChange={getUserData}
        />
      </Col>
      <Col xxl={4} sm={6}>
        <Label>
          Last name<span className="txt-danger">*</span>
        </Label>
        <Input
          type="text"
          placeholder="Enter last name"
          name="lastName"
          value={lastName}
          onChange={getUserData}
        />
      </Col>
      <Col xxl={4} sm={6}>
        <Label>
          Email<span className="txt-danger">*</span>
        </Label>
        <Input
          name="email"
          type="email"
          placeholder="cuba@example.com"
          value={email}
          onChange={getUserData}
        />
      </Col>
      <Col xxl={5} sm={6}>
        <Label>State</Label>
        <Input type="select" name="state" value={state} onChange={getUserData}>
          <option value={""}>Choose...</option>
          <option value={"USA"}>USA </option>
          <option value={"U.K "}>U.K </option>
          <option value={"U.S"}>U.S</option>
        </Input>
      </Col>
      <Col xxl={5} sm={6}>
        <Label>Zip Code</Label>
        <Input name="zip" type="number" value={zip} onChange={getUserData} />
      </Col>
      <Col xxl={4} sm={6}>
        <Label>Contact Number</Label>
        <Input
          type="number"
          placeholder="Enter number"
          name="contact"
          value={contact}
          onChange={getUserData}
        />
      </Col>
      <Col xs={12}>
        <FormGroup check>
          <Input id="invalidCheck-n" type="checkbox" required />
          <Label className="form-check-label" htmlFor="invalidCheck-n">
            Agree to terms and conditions
          </Label>
        </FormGroup>
      </Col>
      <Col xs={12} className="text-end">
        <Button color="primary" onClick={handleNextButton}>
          Next
        </Button>
      </Col>
    </form>
  );
};

export default YourInfoForm;
