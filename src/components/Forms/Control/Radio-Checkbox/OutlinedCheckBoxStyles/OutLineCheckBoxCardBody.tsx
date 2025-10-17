import { outLineCheckBoxData } from "Data/Forms/Control";
import { Fragment } from "react";
import { CardBody, Input, Label } from "reactstrap";

const OutLineCheckBoxCardBody = () => {
  return (
    <CardBody className="common-flex main-checkbox-toggle">
      {outLineCheckBoxData.map((data, index) => (
        <Fragment key={index}>
          <Input className="btn-check" id={`checkBoxToggleOption${index}`} type="checkbox" defaultChecked={data.defaultChecked ? true : false}/>
          <Label className={`btn btn-outline-${data.className}`} htmlFor={`checkBoxToggleOption${index}`}>
            {data.name}
          </Label>
        </Fragment>
      ))}
    </CardBody>
  );
};

export default OutLineCheckBoxCardBody;
