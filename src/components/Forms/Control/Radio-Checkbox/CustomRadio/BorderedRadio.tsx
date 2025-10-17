import { iconRadioBoxData } from "Data/Forms/Control";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { BorderedRadioBoxHeading } from "utils/Constant";

const BorderedRadio = () => {
  return (
    <Col xl={4} sm={6}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{BorderedRadioBoxHeading}</h6>
        {iconRadioBoxData.map((data, index) => (
          <FormGroup check className={`radio radio-${data.color}`} key={index}>
            <Input className="form-check-input" id={`radio${index}`} type="radio" name="radio1" defaultValue="option1" defaultChecked={data.name === "Koho"?true:false}/>
            <Label className="form-check-label" htmlFor={`radio${index}`}>
              {data.name} Theme{" "}
            </Label>
          </FormGroup>
        ))}
      </div>
    </Col>
  );
};

export default BorderedRadio;
