import { filledRadioData } from "Data/Forms/Control";
import { Col, FormGroup, Input, Label } from "reactstrap";
import {  FilledRadioBoxHeading } from "utils/Constant";

const FilledRadio = () => {
  return (
    <Col xl={4} sm={6}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked fill-radios">
        <h6 className="sub-title">{FilledRadioBoxHeading} </h6>
        {filledRadioData.map((data, index) => (
          <FormGroup key={index} check className={`radio radio-${data.colorName}`}>
            <Input className="form-check-input" name="FilledRadio" id={`FilledRadio${index}`} type="radio" defaultChecked={data.heading === "Product" ?true:false} />
            <Label className="form-check-label" htmlFor={`FilledRadio${index}`}>{data.heading}</Label>
          </FormGroup>
        ))}
      </div>
    </Col>
  );
};

export default FilledRadio;
