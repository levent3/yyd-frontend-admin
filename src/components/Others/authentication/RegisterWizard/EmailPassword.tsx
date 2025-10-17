import { registerWizardForm } from "Types/OtherPagePropsType";
import { FormGroup, Input, Label } from "reactstrap";
import { ConfirmPassword, EmailAddress, EmailPassWord, Emailaddress, Password, SignUpToAccount } from "utils/Constant";

const EmailPassword = ({ formValue, getUserData }: registerWizardForm) => {
  const { email, password, confirmPassword } = formValue;
  return (
    <div id="step-2" className="content">
      <div className="wizard-title">
        <h2>{SignUpToAccount}</h2>
        <h5 className="text-muted mb-4">{EmailPassWord}</h5>
      </div>
      <div className="login-main">
        <div className="theme-form">
          <FormGroup className="form-group m-t-15">
            <Label>{EmailAddress}</Label>
            <Input name="email" onChange={getUserData} value={email} type="email" placeholder="name@example.com"/>
          </FormGroup>
          <FormGroup className="form-group">
            <Label>{Password}</Label>
            <Input name="password" onChange={getUserData} value={password} type="password" placeholder="Password"/>
          </FormGroup>
          <FormGroup className="form-group ">
            <Label>{ConfirmPassword}</Label>
            <Input name="confirmPassword" onChange={getUserData} value={confirmPassword} type="password" placeholder="Enter again"/>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default EmailPassword;
