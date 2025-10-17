import { inlineRadioBoxData } from "Data/Forms/Control";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { InlineRadiosBoxHeading } from "utils/Constant";

const InlineRadios = () => {
  return (
    <Col md={6} xl={4}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{InlineRadiosBoxHeading}</h6>
        <div className="form-check-size rtl-input">
          {inlineRadioBoxData.map((data, index) => (
            <FormGroup key={index} check inline>
              <Input name="inlineRadioBox" className="me-2" id={`inlineRadioBox${index}`} type="radio" defaultChecked={data.defaultChecked ? true : false} disabled={data.disabled ? true : false}/>
              <Label className="form-check-label" htmlFor={`inlineRadioBox${index}`}>{data.tittle}</Label>
            </FormGroup>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default InlineRadios;
