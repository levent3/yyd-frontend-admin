import React from "react";
import { Button, Col, Form, Input, Label, ModalBody } from "reactstrap";
import {
  Checktext,
  Emailaddress,
  Firstname,
  Lastname,
  Looksgood,
  SignUp,
} from "utils/Constant";

const FormModalBody = () => {
  return (
    <ModalBody>
      <Form className="row g-3 needs-validation">
        <Col md={6}>
          <Label className="form-label" htmlFor="validationCustom01">
            {Firstname}
          </Label>
          <Input
            className="form-control"
            id="validationCustom01"
            type="text"
            placeholder="Enter your first-name"
            required={true}
          />
          <div className="valid-feedback">{Looksgood}</div>
        </Col>
        <Col md={6}>
          <Label className="form-label" htmlFor="validationCustom02">
            {Lastname}
          </Label>
          <Input
            className="form-control"
            id="validationCustom02"
            type="text"
            placeholder="Enter your last-name"
            required={true}
          />
          <div className="valid-feedback">{Looksgood}</div>
        </Col>
        <Col md={12}>
          <div className="mb-3">
            <Label className="form-label" htmlFor="exampleFormControlInput1">
              {Emailaddress}
            </Label>
            <Input
              className="form-control"
              id="exampleFormControlInput1"
              type="email"
              placeholder="cubatheme@gmail.com"
            />
          </div>
        </Col>
        <Col md={12}>
          <div className="form-check mb-3">
            <Input
              className="form-check-input"
              id="flexCheckDefault"
              type="checkbox"
            />
            <Label
              className="form-check-label form-check-label-1"
              htmlFor="flexCheckDefault"
            >
              {Checktext}
            </Label>
          </div>
          <Button color="primary" type="submit">
            {SignUp}
          </Button>
        </Col>
      </Form>
    </ModalBody>
  );
};

export default FormModalBody;
