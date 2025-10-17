import Image from "next/image";
import { Col } from "reactstrap";
import { Congratulations, CongratulationsMessage, ImgPath } from "utils/Constant";
  
const FinishForm = () => {
  return (
    <form className="stepper-four row g-3 needs-validation" noValidate>
      <Col xs={12} className="m-0">
        <div className="successful-form">
          <Image width={100} height={100} className="img-fluid" src={`${ImgPath}/gif/dashboard-8/successful.gif`} alt="successful"/>
          <h6>{Congratulations}</h6>
          <p>{CongratulationsMessage}</p>
        </div>
      </Col>
    </form>
  );
};

export default FinishForm;
