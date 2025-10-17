import VerificationCode from "../VerificationCode";
import Image from "next/image";
import {Card,CardBody,Col,Row} from "reactstrap";
import EmailVerificationContent from "./EmailVerificationContent";
import { ImgPath } from "utils/Constant";

const EmailVerification = () => {
  return (
    <Col sm={12}>
      <Card>
        <CardBody className="email-verify">
          <Row className="g-3">
            <Col md={6}>
              <div className="card-wrapper border rounded-3 h-100">
                <Row className="g-1">
                  <Col xxl={4} className="box-col-5">
                    <div className="authenticate">
                      <Image height={185} width={158} className="img-fluid" src={`${ImgPath}/forms/email.png`} alt="image"/>
                    </div>
                  </Col>
                  <EmailVerificationContent/>
                </Row>
              </div>
            </Col>
            <VerificationCode />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EmailVerification;
