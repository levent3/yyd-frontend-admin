import { Col, FormGroup, Input, Label } from "reactstrap"
import { RightSwitchesHeading } from "utils/Constant"

const RightSwitches = () => {
  return (
    <Col md={12} xl={4} >
          <div className="card-wrapper border rounded-3 checkbox-checked">
            <h6 className="sub-title">{RightSwitchesHeading}</h6>
            <FormGroup switch check className="form-check-reverse">
              <Input className="form-check-input ms-2" id="flexSwitchCheckReverse" type="checkbox" />
              <Label className="form-check-label" htmlFor="flexSwitchCheckReverse">Reverse switch checkbox input</Label>
            </FormGroup>
            <div className="form-check form-switch form-check-reverse">
              <Input className="form-check-input ms-2" id="flexSwitchCheckDisabled1" type="checkbox" role="switch" disabled />
              <Label className="form-check-label" htmlFor="flexSwitchCheckDisabled1">Disabled switch checkbox input</Label>
            </div>
          </div>
        </Col>
  )
}

export default RightSwitches