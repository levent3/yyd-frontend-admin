import { Col, Input, InputGroup, InputGroupText, Label } from "reactstrap";
import { BasicHeader, DollarSign, RecipientUserName, WithTextArea } from "../../../../../../utils/Constant/index";

const Basic = () => {
  return (
    <Col md={12}>
      <div className="card-wrapper border rounded-3 main-custom-form input-group-wrapper">
        <h6 className="sub-title fw-bold">{BasicHeader}</h6>
        <InputGroup>
          <InputGroupText>@</InputGroupText>
          <Input type="text" placeholder="Username" />
        </InputGroup>
        <InputGroup>
          <Input type="text" placeholder="Recipient's username" />
          <InputGroupText>{RecipientUserName}</InputGroupText>
        </InputGroup>
        <Label>Your vanity URL</Label>
        <InputGroup>
          <InputGroupText>https://example.com/</InputGroupText>
          <Input type="text" />
        </InputGroup>
        <InputGroup>
          <InputGroupText>{DollarSign}</InputGroupText>
          <Input type="text" />
          <InputGroupText>.00</InputGroupText>
        </InputGroup>
        <InputGroup>
          <Input type="text" />
          <InputGroupText>@</InputGroupText>
          <Input type="text" placeholder="Server" />
        </InputGroup>
        <InputGroup>
          <InputGroupText>{WithTextArea}</InputGroupText>
          <Input type="textarea"  defaultValue={""} />
        </InputGroup>
      </div>
    </Col>
  );
};

export default Basic;
