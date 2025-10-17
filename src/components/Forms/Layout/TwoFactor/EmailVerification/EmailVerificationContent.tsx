import { Col, Input, InputGroup, InputGroupText } from "reactstrap";
import {EmailVerificationHeading,EmailVerificationText,Verify,} from "utils/Constant";

const EmailVerificationContent = () => {
  return (
    <Col xxl={8} className="box-col-7">
      <h4>{EmailVerificationHeading}</h4>
      <p>{EmailVerificationText}</p>
      <InputGroup className="mb-3">
        <Input type="text" placeholder="Please enter the code here" />
        <InputGroupText className="bg-primary">{Verify}</InputGroupText>
      </InputGroup>
    </Col>
  );
};

export default EmailVerificationContent;
