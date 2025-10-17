import { Col, FormGroup, Input, Label } from "reactstrap";
import { BorderedCheckBoxHeading } from "utils/Constant";

const BorderedCheckBox = () => {
  let borderedCheckBoxData = ["primary", "secondary", "success"];
  return (
    <Col xl={4} sm={6}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{BorderedCheckBoxHeading}</h6>
        {borderedCheckBoxData.map((data, index) => (
          <FormGroup key={index} check className={`checkbox checkbox-${data} mb-0`}>
            <Input type="checkbox" id={`BorderedCheck${data}`} defaultChecked={data === "primary" ? true : false}/>
            <Label htmlFor={`BorderedCheck${data}`}>
              {data}- checkbox-{data}
            </Label>
          </FormGroup>
        ))}
      </div>
    </Col>
  );
};

export default BorderedCheckBox;
