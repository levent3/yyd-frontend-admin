import { Fragment } from "react";
import { CardBody, Input, Label } from "reactstrap";

const RadioToggleButtonsCardBody = () => {
  const radioToggleButtonsData = ["Checked", "Radio", "Disabled", "Radio"];

  return (
    <CardBody className="common-flex main-radio-toggle">
      {radioToggleButtonsData.map((data, index) => (
        <Fragment key={index}>
          <Input className="btn-check radio-light-secondary" id={`radioToggleOption${index}`} type="radio" name="options" defaultChecked/>
          <Label
            className="btn list-light-secondary"
            htmlFor={`radioToggleOption${index}`}
          >
            {data}
          </Label>
        </Fragment>
      ))}
    </CardBody>
  );
};

export default RadioToggleButtonsCardBody;
