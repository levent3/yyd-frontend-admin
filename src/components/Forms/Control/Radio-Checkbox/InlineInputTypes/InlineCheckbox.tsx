import { inlineCheckboxData } from "Data/Forms/Control";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { InlineCheckBoxHeading } from "utils/Constant";

const InlineCheckbox = () => {
  return (
    <Col md={6} xl={4}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{InlineCheckBoxHeading}</h6>
        <div className="form-check-size rtl-input">
          {inlineCheckboxData.map((data, index) => (
            <FormGroup key={index} check inline>
              <Input className="me-2" id={`inlineCheckbox${index}`} type="checkbox" defaultChecked={data.defaultChecked ? true : false} disabled={data.disabled ? true : false}/>
              <Label className="form-check-label" htmlFor={`inlineCheckbox${index}`}>{data.tittle}</Label>
            </FormGroup>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default InlineCheckbox;
