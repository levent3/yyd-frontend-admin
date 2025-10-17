import { useState } from "react";
import { Button, Col, Input, InputGroup, InputGroupText, Label } from "reactstrap";
import {City,CityError,FirstName,LastName,State,SubmitForm,UserName,UserNameError,Username,ValidFeedBack,Zip,ZipError,stateError,} from "utils/Constant";

const TooltipFormValidationForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <form onSubmit={(event) => event.preventDefault()} className={`row g-3 needs-validation custom-input ${formSubmitted ? "was-validated" : ""}`} noValidate>
      <Col md={4} className="position-relative">
        <Label>{FirstName}</Label>
        <Input type="text" placeholder="Mark" required />
        <div className="valid-tooltip">{ValidFeedBack}</div>
      </Col>
      <Col md={4} className="position-relative">
        <Label>{LastName}</Label>
        <Input type="text" placeholder="Otto" required />
        <div className="valid-tooltip">{ValidFeedBack}</div>
      </Col>
      <Col md={4} className="position-relative">
        <Label>{UserName}</Label>
        <InputGroup className="has-validation">
          <InputGroupText>@</InputGroupText>
          <Input type="text" required/>
          <div className="invalid-tooltip">{UserNameError}</div>
        </InputGroup>
      </Col>
      <Col md={6} className="position-relative">
        <Label>{City}</Label>
        <Input type="text" required />
        <div className="invalid-tooltip">{CityError}</div>
      </Col>
      <Col md={3} className="position-relative">
        <Label>{State}</Label>
        <select className="form-select" required>
          <option selected disabled>Choose...</option>
          <option>U.S </option>
          <option>Thailand </option>
          <option>India </option>
          <option>U.K</option>
        </select>
        <div className="invalid-tooltip">{stateError}</div>
      </Col>
      <Col md={3} className=" position-relative">
        <Label>{Zip}</Label>
        <Input type="text" required />
        <div className="invalid-tooltip">{ZipError}</div>
      </Col>
      <Col xs={12}>
        <Button color="primary" onClick={() => setFormSubmitted(true)} type="submit">{SubmitForm}</Button>
      </Col>
    </form>
  );
};

export default TooltipFormValidationForm;
