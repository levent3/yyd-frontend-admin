import { radioOptionsWithCreativeOptionsData } from "Data/Forms/Control";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { RadiosWithCreativeOptionsSVGIcons, SvgPath } from "utils/Constant";

const RadiosWithCreativeOptions = () => {
  return (
    <Col xl={4}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{RadiosWithCreativeOptionsSVGIcons}</h6>
        {radioOptionsWithCreativeOptionsData.map((data, index) => (
          <div className="payment-wrapper" key={index}>
            <div className="payment-first">
              <FormGroup check className="form-check radio radio-primary">
                <Input id={`CreativeOptions-${index}`} type="radio" name="radio2"/>
                <Label className="form-check-label mb-0" htmlFor={`CreativeOptions-${index}`}>{data.options}</Label>
              </FormGroup>
            </div>
            <div className="payment-second">
              <svg className={`mega-icons stroke-${data.strokeClassName}`}>
                <use href={`${SvgPath}/icon-sprite.svg#${data.svgName}`} />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </Col>
  );
};

export default RadiosWithCreativeOptions;
