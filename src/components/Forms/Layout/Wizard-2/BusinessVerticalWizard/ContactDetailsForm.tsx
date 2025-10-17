import React, { ChangeEvent, useState } from "react";
import ShowError from "../common/ShowError";
import { Button, Col, Input, Label } from "reactstrap";
import { businessFormCommonProps } from "Types/FormType";
import { ContactDetail, ContactDetails, Continue, Email, JoinOrganizationType, OrganizationDescription, OrganizationName, Previous } from "utils/Constant";

const ContactDetailsForm = ({ callbackActive }: businessFormCommonProps) => {
  const [contactDetailsFormValues, setContactDetailsFormValue] = useState({ organizationName: "", email: "", description: "", organizationType: "", });
  const { organizationName, email, description, organizationType } =
    contactDetailsFormValues;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setContactDetailsFormValue({ ...contactDetailsFormValues, [name]: value });
  };
  const handleNextButton = () => {
    if (organizationName !== "" && email !== "" && description !== "" && organizationType !== "") {
      callbackActive(4);
    } else {
      ShowError();
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault()} className="row g-3 needs-validation" noValidate>
      <Col xs={12} >
        <h6>{ContactDetails}</h6>
        <p>{ContactDetail}</p>
      </Col>
      <Col sm={6}>
        <Label >
          {OrganizationName}<span className="txt-danger">*</span>
        </Label>
        <Input type="text" placeholder="Gekko & Co." name="organizationName" value={organizationName} onChange={getUserData} />
      </Col>
      <Col sm={6}>
        <Label >{Email}<span className="txt-danger">*</span></Label>
        <Input type="text" placeholder="org@support.com" value={email} name="email" onChange={getUserData} />
      </Col>
      <Col xs={12} >
        <Label >{JoinOrganizationType}<span className="txt-danger">*</span></Label>
        <Input type="select" value={organizationType} name="organizationType" onChange={getUserData} className="f-w-400 f-14 text-gray">
          <option value={""}>Join organization type</option>
          <option value={"Technology"}>Technology</option>
          <option value={"Culture"}>Culture</option>
          <option value={"NGO "}>NGO </option>
          <option value={"Environment"}>Environment</option>
          <option value={"Life cycle"}>Life cycle</option>
        </Input>
      </Col>
      <Col xs={12}>
        <Label>{OrganizationDescription}</Label>
        <Input type="textarea" value={description} name="description" onChange={getUserData} placeholder="Share your problems and another issues" />
      </Col>
      <Col xs={12} className="d-flex justify-content-end align-items-center gap-2">
        <Button color="primary" onClick={() => callbackActive(2)}>{Previous}</Button>
        <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
      </Col>
    </form>
  );
};

export default ContactDetailsForm;
