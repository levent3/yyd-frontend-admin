import { errorPageCommonProps } from "Types/OtherPagePropsType";
import Image from "next/image";
import Link from "next/link";
import { Col, Container } from "reactstrap";
import { BackToHomePage, CommonErrorPageText, ImgPath } from "utils/Constant";


const CommonErrorPage = ({tittle,tittleClassName,BtnClassName,}: errorPageCommonProps) => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <div className="error-wrapper">
        <Container>
          <Image width={100} height={100} className="img-100" src={`${ImgPath}/other-images/sad.png`} alt="Error"/>
          <div className="error-heading">
            <h2 className={`headline ${tittleClassName}`}>{tittle}</h2>
          </div>
          <Col md={8} className="offset-md-2">
            <p className="sub-content">{CommonErrorPageText}</p>
          </Col>
          <div>
            <Link className={`btn  ${BtnClassName} btn-lg `} href={"/dashboard"}>
              {BackToHomePage}
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CommonErrorPage;
