import { CardBody, Input, InputGroup, InputGroupText } from "reactstrap";

const CheckBoxesAndRadiosCardBody = () => {
  return (
    <CardBody className="checkbox-checked card-wrapper input-group-wrapper">
      <InputGroup>
        <InputGroupText>
          <Input className="form-check-input mt-0" type="checkbox" />
        </InputGroupText>
        <Input type="text" />
      </InputGroup>
      <InputGroup>
        <InputGroupText>
          <Input className="form-check-input mt-0" type="radio" defaultChecked/>
        </InputGroupText>
        <Input type="text"  />
      </InputGroup>
    </CardBody>
  );
};

export default CheckBoxesAndRadiosCardBody;
