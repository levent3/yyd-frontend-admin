import { Ago, ImgPath, IssaBell, IssaBellParagraph } from "utils/Constant";
import { Media } from "reactstrap";
import Image from "next/image";

const IssaBellMessage = () => {
  return (
    <div className="your-msg">
      <Media>
        <Image
          width={50}
          height={50}
          className="img-50 img-fluid m-r-20 rounded-circle"
          alt="Issa Bell"
          src={`${ImgPath}/user/1.jpg`}
        />
        <Media body>
          <span className="f-w-600">
            {IssaBell}&nbsp;
            <span>
              1 Year {Ago} <i className="fa fa-reply font-primary" />
            </span>
          </span>
          <p>{IssaBellParagraph}</p>
        </Media>
      </Media>
    </div>
  );
};

export default IssaBellMessage;
