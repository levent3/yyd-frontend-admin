import { Col, FormGroup, Input, Label } from "reactstrap"
import { DisabledCheckedSwitchCheckboxInput, DisabledSwitchCheckboxInput, DisabledSwitches } from "utils/Constant"

const DisabledSwitch = () => {
  return (
    <Col md={6} xl={4} >
          <div className="card-wrapper border rounded-3 rtl-input checkbox-checked">
            <h6 className="sub-title">{DisabledSwitches}</h6>
            <FormGroup switch check >
              <Input  id="flexSwitchCheckDisabled" type="switch"  disabled />
              <Label className="form-check-label" htmlFor="flexSwitchCheckDisabled">{DisabledSwitchCheckboxInput}</Label>
            </FormGroup>
            <FormGroup switch check>
              <Input  id="flexSwitchCheckCheckedDisabled" type="checkbox" role="switch" defaultChecked disabled />
              <Label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">{DisabledCheckedSwitchCheckboxInput}</Label>
            </FormGroup>
          </div>
    </Col>
  )
}

export default DisabledSwitch