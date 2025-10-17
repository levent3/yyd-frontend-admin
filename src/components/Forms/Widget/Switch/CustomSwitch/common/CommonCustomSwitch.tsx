import { commonCustomSwitchPropsType } from "Types/FormsType";
import { Col, FormGroup, Input } from "reactstrap";

const CommonCustomSwitch = ({cardWrapperClassName,formCheckSizeClassName,disabled,sm}:commonCustomSwitchPropsType) => {
  const switchColors = ["primary","secondary","success","danger","warning","info","dark",];
  return (
    <Col md={4} sm={sm && sm}>
      <div className={`card-wrapper border rounded-3 ${cardWrapperClassName?cardWrapperClassName:""}`}>
        <div className={`form-check-size ${formCheckSizeClassName?formCheckSizeClassName :""}`}>
          {switchColors.map((data, index) => (
            <FormGroup check switch inline key={index}>
              <Input className={`switch-${data} check-size`} type="checkbox" role="switch" defaultChecked disabled={disabled?true:false}/>
            </FormGroup>
          ))}
        </div>
      </div>
    </Col>
  );
};

export default CommonCustomSwitch;
