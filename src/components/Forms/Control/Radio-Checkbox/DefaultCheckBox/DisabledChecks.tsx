import { Col, FormGroup, Input, Label } from "reactstrap";
import {DisabledCheckBox,DisabledCheckedCheckBox,DisabledChecksHeading,} from "utils/Constant";

const DisabledChecks = () => {
  return (
    <Col sm={6} xl={4}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{DisabledChecksHeading}</h6>
        <FormGroup check>
          <Input id="flexCheckDisabled" type="checkbox" disabled />
          <Label htmlFor="flexCheckDisabled">{DisabledCheckBox}</Label>
        </FormGroup>
        <FormGroup check>
          <Input id="flexCheckCheckedDisabled" type="checkbox" defaultChecked disabled/>
          <Label htmlFor="flexCheckCheckedDisabled">{DisabledCheckedCheckBox}</Label>
        </FormGroup>
      </div>
    </Col>
  );
};

export default DisabledChecks;
