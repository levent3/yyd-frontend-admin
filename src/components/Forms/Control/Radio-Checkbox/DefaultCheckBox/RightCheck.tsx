import { Col, FormGroup, Input, Label } from "reactstrap";
import {DisabledReverseCheckBox,ReverseCheckBox,RightChecks} from "utils/Constant";

const RightCheck = () => {
  return (
    <Col sm={6} xl={4}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{RightChecks}</h6>
        <FormGroup check className="form-check-reverse">
          <Input id="reverseCheck1" type="checkbox" />
          <Label htmlFor="reverseCheck1">{ReverseCheckBox}</Label>
        </FormGroup>
        <FormGroup check className="form-check-reverse">
          <Input id="reverseCheck2" type="checkbox" disabled defaultChecked />
          <Label htmlFor="reverseCheck2">{DisabledReverseCheckBox}</Label>
        </FormGroup>
      </div>
    </Col>
  );
};

export default RightCheck;
