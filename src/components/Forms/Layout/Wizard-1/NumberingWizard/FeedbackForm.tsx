import { numberingWizardPropsType } from "Types/FormLayoutType"
import { Col, FormGroup, Input, Label } from 'reactstrap';
import { AgreeToTermsAndConditions, Github, GiveFeedback, LinkedIn, SelectState } from "utils/Constant";

const FeedbackForm = ({getUserData,basicInputFormValue}:numberingWizardPropsType) => {
  const {linkedInLink,gitHubLink,giveFeedBack} =basicInputFormValue
  return (
    <form className="stepper-three row g-3 needs-validation custom-input" noValidate >
          <Col sm={6}>
            <Label>{LinkedIn}<span className="txt-danger">*</span></Label>
            <Input name="linkedInLink" value={linkedInLink} onChange={getUserData}  type="url" placeholder="https://linkedIn.com/cuba" />
          </Col>
          <Col sm={6}>
            <Label>{Github}<span className="txt-danger">*</span></Label>
            <Input name="gitHubLink" value={gitHubLink} onChange={getUserData}  type="url"  placeholder="https://github.com/cuba" />
          </Col>
          <Col xs={12}> 
            <Label>{SelectState}<span className="txt-danger">*</span></Label>
            <Input type="select" name="state" onChange={getUserData}>
              <option value="" >Choose...</option>
              <option value="U.K">U.K </option>
              <option value="U.S">U.S </option>
              <option value="India">India</option>
            </Input>
          </Col>
          <Col xs={12}> 
            <Label>{GiveFeedback}</Label>
            <Input  type="textarea"  name="giveFeedBack" value={giveFeedBack} onChange={getUserData} />
          </Col>
          <Col xs={12}>
            <FormGroup check>
              <Input  id="invalidCheck46" name="agreeConditions" onChange={getUserData} type="checkbox"  required />
              <Label className="form-check-label mb-0" htmlFor="invalidCheck46">{AgreeToTermsAndConditions}</Label>
            </FormGroup>
          </Col>
        </form>
  )
}

export default FeedbackForm