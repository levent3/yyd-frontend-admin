import Image from "next/image";
import { useState } from "react";
import { Button, Col, Input } from "reactstrap";
import {Call,Href,ImgPath,NotReceivedCode,OR,OtpCode,OtpCodeSent,Resend,VerificationCodeHeading,Verify} from "utils/Constant";

const VerificationCode = () => {
  let numbers = [1, 2, 3, 4, 5, 6];
  const [val, setVal] = useState(Array(6).fill(undefined));

  const handleChange = (e: string, index: number) => {
    if (e.length > 1) return;
    else {
      const tempt = [...val];
      tempt[index] = parseInt(e);
      setVal(tempt);
    }
  };
  return (
    <Col md={6}>
      <div className="card-wrapper border rounded-3 h-100">
        <div className="authenticate">
          <h4>{VerificationCodeHeading}</h4>
          <Image width={180.44} height={183.5} className="img-fluid" src={`${ImgPath}/forms/authenticate.png`} alt="authenticate"/>
          <span>{OtpCodeSent}</span>
          <span>+91********70</span>
          <form className="row" onSubmit={(event) => event.preventDefault()}>
            <Col>
              <h5>{OtpCode}</h5>
            </Col>
            <Col className="otp-generate">
              {numbers.map((data,index) => (
                <Input value={val[index]} onChange={(e) => handleChange(e.target.value, index)} key={data} className="code-input" type="number"/>
              ))}
            </Col>
            <Col>
              <Button color="primary" className="w-100">{Verify}</Button>
            </Col>
            <div>
              <span>{NotReceivedCode}</span>
              <span>
                <a href={Href}>{Resend} </a>
                {OR}
                <a href={Href}> {Call}</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Col>
  );
};

export default VerificationCode;
