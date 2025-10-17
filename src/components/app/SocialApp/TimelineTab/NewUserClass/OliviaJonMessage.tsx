import Image from "next/image";
import { Media } from "reactstrap";
import { Ago, ImgPath, OliviaJon, OliviaJonParagraph } from "utils/Constant";

const OliviaJonMessage = () => {
  return (
    <div className="other-msg">
      <Media>
        <Image
          width={50}
          height={50}
          className="img-50 img-fluid m-r-20 rounded-circle"
          alt="user"
          src={`${ImgPath}/user/3.png`}
        />
        <Media body>
          <span className="f-w-600">
            {OliviaJon}&nbsp;
            <span>
              15 Days {Ago} <i className="fa fa-reply font-primary" />
            </span>
          </span>
          <p>{OliviaJonParagraph}</p>
        </Media>
      </Media>
    </div>
  );
};

export default OliviaJonMessage;
