import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import { CheckMeOut, EmailAddress, SignIn, Password } from "utils/Constant";

const FormFloating = () => {
  return (
    <form onSubmit={(event) => event.preventDefault()} className="row g-3 floating-wrapper">
      <Col xs={12}>
        <FormGroup floating>
          <Input type="email" placeholder="name@example.com" />
          <Label>{EmailAddress}</Label>
        </FormGroup>
      </Col>
      <Col xs={12}>
        <FormGroup floating>
          <Input type="password" placeholder="Password" />
          <Label>{Password}</Label>
        </FormGroup>
      </Col>
      <Col xs={12}>
        <FormGroup check className="checkbox-checked">
          <Input type="checkbox" />
          <Label className="form-check-label">{CheckMeOut}</Label>
        </FormGroup>
      </Col>
      <Col xs={12}>
        <Button color="primary" type="submit">
          {SignIn}
        </Button>
      </Col>
    </form>
  );
};

export default FormFloating;
