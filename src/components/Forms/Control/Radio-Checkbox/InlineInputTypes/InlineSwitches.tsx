import { inlineSwitchesData } from "Data/Forms/Control";
import { Col, FormGroup, Input } from "reactstrap";
import { InlineSwitchesHeading } from "utils/Constant";

const InlineSwitches = () => {
  return (
    <Col md={12} xl={4}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{InlineSwitchesHeading}</h6>
        <div className="form-check-size">
          {inlineSwitchesData.map((data, index) => (
            <FormGroup switch check inline key={index}>
              <Input className="check-size" id="flexSwitchCheckDefault2" type="checkbox" role="switch" defaultChecked={data.defaultChecked ? true : false} disabled={data.disabled ? true : false}/>
            </FormGroup>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default InlineSwitches;
