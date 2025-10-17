import { numberingWizardPropsType } from "Types/FormLayoutType"
import { Col, FormGroup, Input, Label } from "reactstrap"
import { AgreeToTermsAndConditions, ConfirmPassword, Email, FirstName, Password } from "utils/Constant"

const BasicInfoForm = ({basicInputFormValue,getUserData}:numberingWizardPropsType) => {
const {email,firstName,password,confirmPassword,agreeTerms}=basicInputFormValue
  return (
    <form className="stepper-one row g-3 needs-validation custom-input" noValidate>
          <Col sm={6}>
            <Label >{Email}<span className="txt-danger">*</span></Label>
            <Input onChange={getUserData}   value={email} name="email" type="email"  placeholder="cuba@gmail.com" />
          </Col>
          <Col sm={6}>
            <Label>{FirstName}<span className="txt-danger">*</span></Label>
            <Input onChange={getUserData} value={firstName} name="firstName"  type="text" placeholder="Enter your name" />
          </Col>
          <Col xs={12} >
            <Label className="col-sm-12" >{Password}<span className="txt-danger">*</span></Label>
            <Input  onChange={getUserData} value={password} name="password"  type="password" placeholder="Enter password"  />
          </Col>
          <Col xs={12}>
            <Label className="col-sm-12" >{ConfirmPassword}<span className="txt-danger">*</span></Label>
            <Input onChange={getUserData} value={confirmPassword} name="confirmPassword" type="password" placeholder="Enter confirm password"  />
          </Col>
          <Col xs={12} >
            <FormGroup check>
              <Input  id="inputCheckWizard" name="agreeTerms" onChange={getUserData} type="checkbox" checked={agreeTerms} />
              <Label className="form-check-label mb-0" htmlFor="inputCheckWizard">{AgreeToTermsAndConditions}</Label>
            </FormGroup>
          </Col>
        </form>
  )
}

export default BasicInfoForm