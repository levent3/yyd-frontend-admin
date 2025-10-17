import { Ago, AlexendraDhadio, AlexendraDhadioParagraph, Href,  ImgPath,  MoreCommnets } from "utils/Constant";
import OliviaJonMessage from "./OliviaJonMessage";
import JasonBorneMessage from './JasonBorneMessage';
import IssaBellMessage from './IssaBellMessage';
import Image from "next/image";
import { Media } from "reactstrap";
const SocialChat = () => {
  return (
    <div className="social-chat">
      <JasonBorneMessage/>
      <div className="other-msg">
        <Media>
          <Image height={50} width={50} className="img-50 img-fluid m-r-20 rounded-circle" alt="user" src={`${ImgPath}/user/2.png`}/>
          <Media body>
            <span className="f-w-600">
              {AlexendraDhadio}&nbsp;
              <span>
                1 Month {Ago} <i className="fa fa-reply font-primary" />
              </span>
            </span>
            <p>{AlexendraDhadioParagraph}</p>
          </Media>
        </Media>
      </div>
      <OliviaJonMessage />
      <IssaBellMessage />
      <div className="text-center">
        <a href={Href}>{MoreCommnets}</a>
      </div>
    </div>
  );
};

export default SocialChat;
