import Image from "next/image";
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import {FactorAuthentication, ImgPath,TwoFactorAuthenticationDetails,TwoFactorAuthenticationHeading,} from "utils/Constant";
import ModalOne from "./ModalOne";

const TwoFactorAuthentication = () => {
  const [modalOne, setModalOne] = useState(false);
  const toggle = () => setModalOne(!modalOne);
  return (
    <Col sm={12}>
      <Card>
        <CardBody className="authentication-body">
          <div className="authentication-wrapper">
            <h4>{TwoFactorAuthenticationHeading}</h4>
            <p>{TwoFactorAuthenticationDetails}</p>
            <Image width={406} height={354} src={`${ImgPath}/forms/qr-scan.png`} alt="qr-scan"/>
          </div>
          <a className="btn btn-primary mt-5" onClick={toggle}>{FactorAuthentication}</a>
          <ModalOne toggle={toggle} modalOne={modalOne} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TwoFactorAuthentication;
