import Link from "next/link";
import { commonFormPropsType } from "./CommonForm";
import { AgreeWith, CreateAccount, CreateYourAccount, EmailAddress, EnterYourPersonalDetails, FacebookHeading, HaveAccount, Href, Password, PrivacyPolicy, SignIn, SignUpWith, TwitterHeading, YourName, linkedInHeading } from "utils/Constant";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { useState } from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import CommonLogo from "./CommonLogo";

const CommonRegisterForm = ({ alignLogo }: commonFormPropsType) => {
  const [showPassWord, setShowPassWord] = useState(false);

  return (
    <div className="login-card login-dark">
      <div>
        <div>
          <CommonLogo alignLogo={alignLogo} />
        </div>
        <div className="login-main">
          <form className="theme-form" onSubmit={(event) => event.preventDefault()}>
            <h4>{CreateYourAccount}</h4>
            <p>{EnterYourPersonalDetails}</p>
            <FormGroup>
              <Label className="col-form-label pt-0">{YourName}</Label>
              <Row className="g-2">
                <Col xs={6}>
                  <Input type="text" required placeholder="First name" />
                </Col>
                <Col xs={6}>
                  <Input type="text" required placeholder="Last name" />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label className="col-form-label">{EmailAddress}</Label>
              <Input type="email" required placeholder="Test@gmail.com" />
            </FormGroup>
            <FormGroup>
              <Label className="col-form-label">{Password}</Label>
              <div className="form-input position-relative">
                <Input type={showPassWord ? "text" : "password"} placeholder="*********" required />
                <div className="show-hide">
                  <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""} />
                </div>
              </div>
            </FormGroup>
            <FormGroup className="mb-0">
              <div className="checkbox p-0">
                <Input id="checkbox1" type="checkbox" />
                <Label className="text-muted" htmlFor="checkbox1">{AgreeWith}<a className="ms-2" href={Href}>{PrivacyPolicy}</a></Label>
              </div>
              <Button color="primary" className="btn-block w-100">{CreateAccount}</Button>
            </FormGroup>
            <h6 className="text-muted mt-4 or">{SignUpWith}</h6>
            <div className="social mt-4">
              <div className="btn-showcase">
                <a className="btn btn-light" href="https://www.linkedin.com/login" target="_blank" rel="noreferrer">
                  <Linkedin className="txt-linkedin" />{linkedInHeading}
                </a>
                <a className="btn btn-light" href="https://twitter.com/login?lang=en" target="_blank" rel="noreferrer">
                  <Twitter className="txt-twitter" />{TwitterHeading}
                </a>
                <a className="btn btn-light" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <Facebook className="txt-fb" />{FacebookHeading}
                </a>
              </div>
            </div>
            <p className="mt-4 mb-0">{HaveAccount}<Link className="ms-2" href="/pages/authentication/login-simple">{SignIn}</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommonRegisterForm;
