import { Button, Col, Input, Label } from "reactstrap";
import { CheckMeOut, Email, Password, SignIn } from "utils/Constant";

const FormBasic = () => {
  return (
    <form onSubmit={(event) => event.preventDefault()} className="row g-3">
      <Col md={12}>
        <Label>{Email}</Label>
        <Input type="email" placeholder="Enter Your Email" />
      </Col>
      <Col md={12}>
        <Label>{Password}</Label>
        <Input type="password" placeholder="Enter Your Password" />
      </Col>
      <Col xs={12}>
        <div className="form-check checkbox-checked">
          <Input type="checkbox" />
          <Label>{CheckMeOut}</Label>
        </div>
      </Col>
      <Col xs={12}>
        <Button color="primary" type="submit">
          {SignIn}
        </Button>
      </Col>
    </form>
  );
};

export default FormBasic;
