import { Col, FormGroup, Input, Label } from "reactstrap";
import { DefaultRadioHeading, DisabledCheckedRadio, RightRadiosHeading } from "utils/Constant";

const RightRadios = () => {
  return (
    <Col sm={12} xl={4} >
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{RightRadiosHeading}</h6>
        <FormGroup check className="form-check-reverse">
          <Input className="form-check-input" id="flexRadioDefault3" type="radio" name="flexRadioDefault"/>
          <Label className="form-check-label" htmlFor="flexRadioDefault3">{DefaultRadioHeading}</Label>
        </FormGroup>
        <FormGroup check className="form-check-reverse">
          <Input className="form-check-input" id="flexRadioCheckedDisabled1" type="radio" name="flexRadioDisabled" defaultChecked disabled/>
          <Label className="form-check-label" htmlFor="flexRadioCheckedDisabled1">{DisabledCheckedRadio}</Label>
        </FormGroup>
      </div>
    </Col>
  );
};

export default RightRadios;
