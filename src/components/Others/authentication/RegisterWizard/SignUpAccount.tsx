import { registerWizardForm } from "Types/OtherPagePropsType";
import { FormGroup, Input, Label } from "reactstrap";
import { ContactNo, EmailPassWord, FirstName, LastName, SignUpToAccount } from "utils/Constant";

const SignUpAccount = ({ formValue, getUserData }: registerWizardForm) => {
  const { contactNumber, lastName, firstName } = formValue;
  return (
    <div className="content">
      <div className="wizard-title">
        <h2>{SignUpToAccount}</h2>
        <h5 className="text-muted mb-4">{EmailPassWord}</h5>
      </div>
      <div className="login-main">
        <div className="theme-form">
          <FormGroup className="form-group ">
            <Label>{FirstName}</Label>
            <Input value={firstName} name="firstName" onChange={getUserData} id="name" type="text" placeholder="Johan"/>
          </FormGroup>
          <FormGroup className="form-group">
            <Label >{LastName}</Label>
            <Input value={lastName} name="lastName" onChange={getUserData} type="text" placeholder="Deo"/>
          </FormGroup>
          <FormGroup className="form-group">
            <Label>{ContactNo}</Label>
            <Input value={contactNumber} name="contactNumber" onChange={getUserData} type="number" placeholder={"123456789"}/>
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default SignUpAccount;
