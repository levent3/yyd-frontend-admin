import { CardBody, Input, InputGroup, InputGroupText } from "reactstrap";
import { Default, Large, Small } from "utils/Constant";

const SizingCardBody = () => {
  return (
    <CardBody className="card-wrapper input-group-wrapper">
      <InputGroup size="sm">
        <InputGroupText >{Small}</InputGroupText>
        <Input type="text" />
      </InputGroup>
      <InputGroup>
        <InputGroupText>{Default}</InputGroupText>
        <Input type="text" />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroupText>{Large}</InputGroupText>
        <Input type="text" />
      </InputGroup>
    </CardBody>
  );
};

export default SizingCardBody;
