import { Col, Input, Label, ModalBody } from "reactstrap";

const NewAdressModalBody = () => {
  return (
    <ModalBody className="shipping-modal">
      <form className="row g-3 needs-validation" noValidate>
        <Col xs={12}>
          <Label>Name</Label>
          <Input type="text" placeholder="Enter your name" required />
        </Col>
        <Col xs={12}>
          <Label>Address</Label>
          <Input
            type="textarea"
            rows={3}
            placeholder="Enter your address..."
            defaultValue={""}
          />
        </Col>
        <Col xs={12}>
          <Label className="w-100">
            Address Type
            <Input type="select" required>
              <option selected>Home</option>
              <option>Office</option>
            </Input>
          </Label>
        </Col>
        <Col xs={12}>
          <Label>Contact No</Label>
          <Input type="number" placeholder={"123456789"} />
        </Col>
      </form>
    </ModalBody>
  );
};

export default NewAdressModalBody;
