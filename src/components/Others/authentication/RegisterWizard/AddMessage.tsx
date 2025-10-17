import { registerWizardForm } from "Types/OtherPagePropsType";
import { FormGroup, Input, Label } from 'reactstrap';
import { Birthday, EmailPassWord, SignUpToAccount } from "utils/Constant";

const AddMessage = ({formValue,getUserData}:registerWizardForm) => {
  const {birthDate,age,passPort}=formValue
  return (
    <div id="step-3" className="content" >
      <div className="wizard-title">
        <h2>{SignUpToAccount}</h2>
        <h5 className="text-muted mb-4">{EmailPassWord}</h5>
      </div>
      <div className="login-main">
        <div className="theme-form">
          <FormGroup className="form-group">
            <Label>{Birthday}</Label>
            <Input  type="date" onChange={getUserData} value={birthDate} name="birthDate" />
          </FormGroup>
          <FormGroup className="form-group">
            <Label className="control-label">Age</Label>
            <Input  placeholder="Age" type="text" onChange={getUserData} value={age} name="age" />
          </FormGroup>
          <FormGroup className="form-group">
            <Label className="control-label">Have Passport</Label>
            <Input  placeholder="Yes/No" type="text" onChange={getUserData} value={passPort} name="passPort" />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default AddMessage;
