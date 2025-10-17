import { Col, Input, Label, FormGroup } from "reactstrap";

const CreditCardForm = () => {
  return (
    <form className="row g-3 needs-validation" noValidate>
      <Col md={12}>
        <Label>Card Holder</Label>
        <Input type="text" required placeholder="Enter card holder name" />
      </Col>
      <Col md={4}>
        <Label>Card Number</Label>
        <Input type="number" required placeholder="xxxx xxxx xxxx xxxx" />
        <div className="invalid-feedback">Please enter your valid number</div>
      </Col>
      <Col md={4}>
        <Label>Expiration(MM/YY)</Label>
        <Input type="number" required placeholder="xx/xx" />
      </Col>
      <Col md={4}>
        <Label>CVV</Label>
        <Input type="number" required />
      </Col>
      <Col xs={12}>
        <Label>Upload Documentation</Label>
        <Input type="file" required />
      </Col>
      <Col xs={12}>
        <FormGroup check>
          <Input id="invalidCheck-c" type="checkbox" required />
          <Label className="form-check-label" htmlFor="invalidCheck-c">
            All the above information is correct
          </Label>
        </FormGroup>
      </Col>
    </form>
  );
};

export default CreditCardForm;
