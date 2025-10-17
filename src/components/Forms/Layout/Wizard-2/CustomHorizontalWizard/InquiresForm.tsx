import { ChangeEvent, useState } from "react";
import ShowError from "../common/ShowError";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { businessFormCommonProps } from "Types/FormType";
import { ContactNumber, Continue, Email, Previous, SelectBanks, describeYourIssue } from "utils/Constant";

const InquiresForm = ({ callbackActive,diffrentId }: businessFormCommonProps) => {
  const [inquiresForm, setInquiresForm] = useState({ notifications: "", email: "", contactNumber: "", describeIssue: "", });
  const { notifications, email, contactNumber, describeIssue } = inquiresForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = name == "rememberNextTime" ? event.target.checked : event.target.value;
    setInquiresForm({ ...inquiresForm, [name]: value });
  };

  const handleNextButton = () => {
    if (notifications !== "" && email !== "" && contactNumber !== "" && describeIssue !== "") {
      callbackActive(4);
    } else {
      ShowError();
    }
  };
  let itemsName = ["Featured Items", "Newsletters", "Notifications", "Blogs"];
  return (
    <form onSubmit={(event) => event.preventDefault()} className="row g-3 needs-validation" noValidate>
      <Col xs={12} className="inquiries-form">
        <Row>
          <Col md={6}>
            <p className="f-w-500">{SelectBanks}</p>
            <div className="choose-option">
              {itemsName.map((data, index) => (
                <FormGroup check key={index} className="radio radio-primary">
                  <Input className="me-2" id={diffrentId?data: `${data+index}`} type="radio" name="notifications" onChange={getUserData} checked={notifications === data} value={data} />
                  <Label className="form-check-label" htmlFor={diffrentId?data: `${data+index}`}>{data}</Label>
                </FormGroup>
              ))}
            </div>
          </Col>
          <Col md={6}>
            <Row className="g-3">
              <Col xs={12}>
                <Label>{Email}<span className="txt-danger">*</span>
                </Label>
                <Input type="text" placeholder="org@support.com" value={email} name="email" onChange={getUserData} />
              </Col>
              <Col xs={12}>
                <Label>{ContactNumber}</Label>
                <Input id="customContact2" type="number" placeholder="Enter number" value={contactNumber} name="contactNumber" onChange={getUserData} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        <Label className="f-w-500">{describeYourIssue}</Label>
        <Input type="textarea" rows={3} value={describeIssue} name="describeIssue" onChange={getUserData} />
      </Col>
      <Col xs={12} className="d-flex align-items-center justify-content-end gap-2">
        <Button color="primary">{Previous}</Button>
        <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
      </Col>
    </form>
  );
};

export default InquiresForm;
