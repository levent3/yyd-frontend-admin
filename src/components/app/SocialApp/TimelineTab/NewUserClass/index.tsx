import { Card, CardBody, Col } from "reactstrap";
import {  ImgPath, TimelineParagraph } from "utils/Constant";
import CommentsBox from "./CommentsBox";
import SocialChat from "./SocialChat";
import NewUsersSocial from './NewUsersSocial';
import LikeContent from "./LikeContent";
import Image from "next/image";

const NewUserClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CardBody>
          <NewUsersSocial/>
          <Image width={685} height={430} className="img-fluid" alt="timeline" src={`${ImgPath}/social-app/timeline-1.png`}/>
          <div className="timeline-content">
            <p>{TimelineParagraph}</p>
            <LikeContent/>
            <SocialChat />
            <CommentsBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewUserClass;
