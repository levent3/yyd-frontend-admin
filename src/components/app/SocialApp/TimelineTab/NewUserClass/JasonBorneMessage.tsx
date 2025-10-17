import { Ago, ImgPath, JasonBorne, JasonBorneParagraph } from "utils/Constant";
import { Media } from "reactstrap";
import Image from "next/image";

const JasonBorneMessage = () => {
  return (
    <div className="your-msg">
      <Media>
        <Image
          width={50}
          height={50}        
          className="img-50 img-fluid m-r-20 rounded-circle"
          alt="user"
          src={`${ImgPath}/user/1.jpg`}
        />
        <Media body>
          <span className="f-w-600">
            {JasonBorne}&nbsp;
            <span>
              1 Year {Ago} <i className="fa fa-reply font-primary" />
            </span>
          </span>
          <p>{JasonBorneParagraph}</p>
        </Media>
      </Media>
    </div>
  );
};

export default JasonBorneMessage;
