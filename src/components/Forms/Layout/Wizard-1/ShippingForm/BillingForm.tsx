import { ChangeEvent, useState } from "react";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import ShowError from "../common/ShowError";
import { BillingInformation, FillFollowingInformation } from "utils/Constant";
import { commonPropsTypes } from "Types/FormLayoutType";

const BillingForm = ({ callbackActive }: commonPropsTypes) => {
  const [studentValidationForm, setStudentValidationForm] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    address: "",
    country: "",
    state: "",
    zip: "",
    rememberNextTime: false,
    otherNotes: "",
  });
  const {
    firstName,
    lastName,
    contact,
    email,
    address,
    country,
    state,
    zip,
    rememberNextTime,
    otherNotes,
  } = studentValidationForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value =
      name == "rememberNextTime" ? event.target.checked : event.target.value;
    setStudentValidationForm({ ...studentValidationForm, [name]: value });
  };
  const handleNextButton = () => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      contact !== "" &&
      email !== "" &&
      address !== "" &&
      country !== "" &&
      state !== "" &&
      zip !== "" &&
      rememberNextTime !== false &&
      otherNotes !== ""
    ) {
      callbackActive(2);
    } else {
      ShowError();
    }
  };
  return (
    <>
      <h6>{BillingInformation}</h6>
      <p className="f-light">{FillFollowingInformation}</p>
      <form
        onSubmit={(event) => event.preventDefault}
        className="row g-3 needs-validation "
        noValidate
      >
        <Col sm={6}>
          <Label>
            First Name<span className="txt-danger">*</span>
          </Label>
          <Input
            value={firstName}
            onChange={getUserData}
            name="firstName"
            type="text"
            placeholder="Enter first name"
          />
        </Col>
        <Col sm={6}>
          <Label>
            Last Name<span className="txt-danger">*</span>
          </Label>
          <Input
            value={lastName}
            onChange={getUserData}
            name="lastName"
            type="text"
            placeholder="Enter last name"
          />
        </Col>
        <Col sm={6}>
          <Label>Contact Number</Label>
          <Input
            value={contact}
            onChange={getUserData}
            name="contact"
            type="number"
            placeholder="Enter number"
          />
        </Col>
        <Col sm={6}>
          <Label>
            {" "}
            Email<span className="txt-danger">*</span>
          </Label>
          <Input
            value={email}
            onChange={getUserData}
            name="email"
            type="email"
            placeholder="cuba@example.com"
          />
        </Col>
        <Col sm={12}>
          <Label>Address </Label>
          <Input
            value={address}
            onChange={getUserData}
            type="textarea"
            name="address"
            rows={3}
          />
        </Col>
        <Col sm={4}>
          <Label>Country</Label>
          <Input
            type="select"
            value={country}
            onChange={getUserData}
            name="country"
          >
            <option value={""}>Select Country</option>
            <option value={"Africa "}>Africa </option>
            <option value={"India"}>India</option>
            <option value={"Indonesia "}>Indonesia </option>
            <option value={"Netherlands"}>Netherlands</option>
            <option value={"U.K "}>U.K </option>
            <option value={"U.S"}>U.S</option>
          </Input>
        </Col>
        <Col sm={4}>
          <Label>State</Label>
          <Input
            value={state}
            onChange={getUserData}
            name="state"
            type="text"
            placeholder="Enter state"
          />
        </Col>
        <Col sm={4}>
          <Label>Zip Code</Label>
          <Input value={zip} onChange={getUserData} type="number" name="zip" />
        </Col>
        <Col xs={12}>
          <FormGroup check>
            <Input
              name="rememberNextTime"
              onChange={getUserData}
              id="invalid-check-wizard"
              type="checkbox"
            />
            <Label
              className="form-check-label mb-0 d-block"
              htmlFor="invalid-check-wizard"
            >
              Remember me for next time
            </Label>
          </FormGroup>
        </Col>
        <Col xs={12}>
          <Label htmlFor="exampleFormControlTextarea-01">Other Notes</Label>
          <Input
            value={otherNotes}
            onChange={getUserData}
            type="textarea"
            name="otherNotes"
            rows={3}
            placeholder="Enter your queries..."
          />
        </Col>
        <Col xs={12} className="text-end">
          <Button onClick={handleNextButton} color="primary">
            Proceed to Next
            <i className="fa fa-truck proceed-next pe-2" />
          </Button>
        </Col>
      </form>
    </>
  );
};

export default BillingForm;
