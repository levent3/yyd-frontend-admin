import { Col, FormGroup, Input, Label } from "reactstrap";
import { SimpleCheckBox } from "utils/Constant";

const SimpleCheckbox = () => {
  const simpleCheckboxNames = ["Blog", "Gallery", "Faq", "Email", "Icons"];
  return (
    <Col md={12}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{SimpleCheckBox}</h6>
        <div className="form-check-size">
          {simpleCheckboxNames.map((data, index) => (
            <FormGroup key={index} check inline className="checkbox checkbox-dark mb-0">
              <Input className="form-check-input" id={`simple-inline-${data}`} type="checkbox" defaultChecked={data ==="Gallery"?true:false}/>
              <Label className="form-check-label" htmlFor={`simple-inline-${data}`}>{data}</Label>
            </FormGroup>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default SimpleCheckbox;
