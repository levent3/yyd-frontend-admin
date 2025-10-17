import NewUsersSocial from "../NewUserClass/NewUsersSocial";
import { Card, CardBody, Col } from "reactstrap";
import { Href, ImgPath, MoreCommnets, TimelineParagraph } from "utils/Constant";
import JasonBorneMessage from "../NewUserClass/JasonBorneMessage";
import IssaBellMessage from "../NewUserClass/IssaBellMessage";
import CommentsBox from "../NewUserClass/CommentsBox";
import Image from "next/image";
import LikeContent from "../NewUserClass/LikeContent";

const NewUserClass2 = () => {
  return (
    <Col sm={12}>
      <Card>
        <CardBody>
          <NewUsersSocial />
          <Image height={456} width={684} className="img-fluid" alt="user12" src={`${ImgPath}/social-app/timeline-2.png`}/>
          <div className="timeline-content">
            <p>{TimelineParagraph}</p>
            <LikeContent />
            <div className="social-chat">
              <JasonBorneMessage />
              <IssaBellMessage />
              <div className="text-center">
                <a href={Href}>{MoreCommnets}</a>
              </div>
            </div>
            <CommentsBox/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewUserClass2;
