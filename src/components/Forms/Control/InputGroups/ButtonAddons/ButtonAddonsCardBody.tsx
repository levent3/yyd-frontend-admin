import { Button, CardBody, Input, InputGroup } from "reactstrap";
import { Submit } from "utils/Constant";

const ButtonAddonsCardBody = () => {
  return (
    <CardBody className="card-wrapper input-group-wrapper">
      <InputGroup>
        <Button color="secondary" outline>$ 25</Button>
        <Input type="text" />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Recipient's username" />
        <Button color="warning" outline>{Submit}</Button>
      </InputGroup>
      <InputGroup>
        <Button color="secondary"><span>€ </span></Button>
        <Button color="warning">0.0114419</Button>
        <Input type="text" />
      </InputGroup>
      <InputGroup>
        <Input type="text" placeholder="Recipient's username" />
        <Button color="secondary"><span>₹</span></Button>
        <Button color="warning">500</Button>
      </InputGroup>
    </CardBody>
  );
};

export default ButtonAddonsCardBody;
