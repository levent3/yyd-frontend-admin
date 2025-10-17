import { Col, FormGroup, Input, Label } from "reactstrap";
import { SimpleRadiosHeading } from "utils/Constant";

const SimpleRadios = () => {
  const simpleRadioBoxNames = ["Maps", "Tasks", "To-do", "Forms", "Login"];

  return (
    <Col md={12}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{SimpleRadiosHeading}</h6>
        <div className="form-check-size">
          {simpleRadioBoxNames.map((data, index) => (
            <FormGroup key={index} check inline className="radio radio-primary">
              <Input className="form-check-input" id={`inline-radio-${index}`} type="radio" name="radio5" defaultChecked={data === "Maps" ? true : false}/>
              <Label className="form-check-label" htmlFor={`inline-radio-${index}`}>{data}</Label>
            </FormGroup>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default SimpleRadios;
