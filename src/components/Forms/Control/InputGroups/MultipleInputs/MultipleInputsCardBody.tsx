import { CardBody, Input, InputGroup, InputGroupText } from "reactstrap";
import { DollarSign, FirstAndLastName, ZeroAmount } from "utils/Constant";

const MultipleInputsCardBody = () => {
  return (
    <CardBody className="common-flex main-custom-form card-wrapper">
      <InputGroup>
        <InputGroupText>{FirstAndLastName}</InputGroupText>
        <Input type="text" />
        <Input type="text" />
      </InputGroup>
      <InputGroup>
        <InputGroupText>{DollarSign}</InputGroupText>
        <InputGroupText>{ZeroAmount}</InputGroupText>
        <Input type="text" />
      </InputGroup>
      <InputGroup>
        <Input type="text" />
        <InputGroupText>{DollarSign}</InputGroupText>
        <InputGroupText>{ZeroAmount}</InputGroupText>
      </InputGroup>
    </CardBody>
  );
};

export default MultipleInputsCardBody;
