import { useState, ChangeEvent } from "react";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import ShowError from "../common/ShowError";
import { businessFormCommonProps } from "Types/FormType";
import {
  AgreeToTermsAndConditions,
  ContactNumber,
  Continue,
  Email,
  FirstName,
  LastName,
  State,
  ZipCode,
} from "utils/Constant";

const PersonalInfoForm = ({ callbackActive }: businessFormCommonProps) => {
  const [personalDetailsForm, setPersonalDetailsForm] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    state: "",
    zip: "",
  });
  const { firstName, lastName, contact, email, state, zip } =
    personalDetailsForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value =
      name == "rememberNextTime" ? event.target.checked : event.target.value;
    setPersonalDetailsForm({ ...personalDetailsForm, [name]: value });
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
      callbackActive(2);
    } else {
      ShowError();
    }
  };
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="row g-3 needs-validation"
      noValidate
    >
      <Col xl={4} sm={6}>
        <Label>
          {FirstName}
          <span className="txt-danger">*</span>
        </Label>
        <Input
          type="text"
          placeholder="Enter first name"
          value={firstName}
          name="firstName"
          onChange={getUserData}
        />
      </Col>
      <Col xl={4} sm={6}>
        <Label>
          {LastName}
          <span className="txt-danger">*</span>
        </Label>
        <Input
          type="text"
          placeholder="Enter last name"
          value={lastName}
          name="lastName"
          onChange={getUserData}
        />
      </Col>
      <Col xl={4} xs={12}>
        <Label>
          {Email}
          <span className="txt-danger">*</span>
        </Label>
        <Input
          id="customEmail"
          type="email"
          placeholder="cuba@example.com"
          value={email}
          name="email"
          onChange={getUserData}
        />
      </Col>
      <Col xl={5} sm={4}>
        <Label>{State}</Label>
        <Input type="select" value={state} name="state" onChange={getUserData}>
          <option value={""}>Choose...</option>
          <option value={"USA"}>USA </option>
          <option value={"U.K"}>U.K </option>
          <option value={"U.S"}>U.S</option>
        </Input>
      </Col>
      <Col xl={3} sm={4}>
        <Label>{ZipCode}</Label>
        <Input type="number" value={zip} name="zip" onChange={getUserData} />
      </Col>
      <Col sm={4}>
        <Label>{ContactNumber}</Label>
        <Input
          type="number"
          placeholder="Enter number"
          onChange={getUserData}
          name="contact"
          value={contact}
        />
      </Col>
      <Col xs={12}>
        <FormGroup check>
          <Input id="invalid-check-wizard" type="checkbox" />
          <Label
            className="form-check-label mb-0 d-block"
            htmlFor="invalid-check-wizard"
          >
            {AgreeToTermsAndConditions}
          </Label>
        </FormGroup>
      </Col>
      <Col xs={12} className="text-end">
        <Button color="primary" onClick={handleNextButton}>
          {Continue}
        </Button>
      </Col>
    </form>
  );
};

export default PersonalInfoForm;
