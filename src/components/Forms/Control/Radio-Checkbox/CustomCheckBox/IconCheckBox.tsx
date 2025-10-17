import { iconBoxData } from "Data/Forms/Control";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { IconCheckBoxHeading } from "utils/Constant";

const IconCheckBox = () => {
  return (
    <Col xl={4} sm={12} className="order-xl-0 order-sm-1">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{IconCheckBoxHeading} </h6>
        <FormGroup check className="checkbox checkbox-primary ps-0 main-icon-checkbox">
          <ul className="checkbox-wrapper">
            {iconBoxData.map((data, index) => (
              <li key={index}>
                <Input className="checkbox-shadow" id={`checkbox-icon-${index}`} type="checkbox"/>
                <Label className="form-check-label" htmlFor={`checkbox-icon-${index}`}> <i className={`fa fa-${data.icon}`} /> <span>{data.header}</span></Label>
              </li>
            ))}
          </ul>
        </FormGroup>
      </div>
    </Col>
  );
};

export default IconCheckBox;
