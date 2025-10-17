import Link from "next/link";
import { useState } from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { CreateAccount, DoNotAccount, EmailAddress, EnterEmailPasswordLogin, FacebookHeading, ForgotPassword, Password, RememberPassword, SignIn, SignInAccount, SignInWith, TwitterHeading, linkedInHeading } from "utils/Constant";
import CommonLogo from "./CommonLogo";
export interface commonFormPropsType {
  alignLogo?: string;
}
const CommonForm = ({ alignLogo }: commonFormPropsType) => {
  const [showPassWord, setShowPassWord] = useState(false);
  return (
    <div className="login-card login-dark">
      <div>
        <div><CommonLogo alignLogo={alignLogo} /></div>
        <div className="login-main">
          <form className="theme-form" onSubmit={(event) => event.preventDefault()}>
            <h4>{SignInAccount}</h4>
            <p>{EnterEmailPasswordLogin}</p>
            <FormGroup>
              <Label className="col-form-label">{EmailAddress}</Label>
              <Input type="email" required placeholder="Test@gmail.com" />
            </FormGroup>
            <FormGroup>
              <Label className="col-form-label">{Password}</Label>
              <div className="form-input position-relative">
                <Input type={showPassWord ? "text" : "password"} placeholder="*********" />
                <div className="show-hide">
                  <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""} />
                </div>
              </div>
            </FormGroup>
            <FormGroup className="mb-0 position-relative">
              <div className="checkbox p-0">
                <Input id="checkbox1" type="checkbox" />
                <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
              </div>
              <Link className="link" href="/pages/authentication/forget-pwd">{ForgotPassword}</Link>
              <div className="text-end mt-3">
                <Button color="primary" className="btn-block w-100" type="submit">{SignIn}</Button>
              </div>
            </FormGroup>
            <h6 className="text-muted mt-4 or">{SignInWith}</h6>
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
            <p className="mt-4 mb-0 text-center">
              {DoNotAccount}<Link className="ms-2" href="/pages/authentication/register-simple">{CreateAccount}</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommonForm;
