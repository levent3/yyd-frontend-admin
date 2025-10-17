import { Button, CardBody, Input, InputGroup, Label } from "reactstrap";
import { Submit, Upload, Verify } from "utils/Constant";

const CustomFileInputCardBody = () => {
  return (
    <CardBody className="main-custom-form input-group-wrapper">
      <InputGroup>
        <Label className="input-group-text">{Upload}</Label>
        <Input type="file" />
      </InputGroup>
      <InputGroup>
        <Input type="file" />
        <Label className="input-group-text">{Verify}</Label>
      </InputGroup>
      <InputGroup>
        <Button outline color="success"><i className="icofont icofont-ui-copy" /></Button>
        <Input type="file" />
      </InputGroup>
      <InputGroup>
        <Input type="file" />
        <Button color="success" outline>
          {Submit}
        </Button>
      </InputGroup>
    </CardBody>
  );
};

export default CustomFileInputCardBody;
