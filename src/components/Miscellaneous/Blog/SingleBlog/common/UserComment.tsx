import { Col, Media, Row } from "reactstrap";
import CommonHitsAndComments from "./commonHitsAndComments";
import { ImgPath, JolioMark, SingleBlogParagraph } from "utils/Constant";
import Image from "next/image";
import { userCommentPropsType } from "Types/Blog";

const UserComment = ({ImageSrc,mainDivClassName,userReplay,}: userCommentPropsType) => {
  return (
    <>
      {userReplay ? (
        <li>
          <ul>
            <li>
              <Media>
                <Image width={90} height={90} className="" src={`${ImgPath}/blog/9.jpg`} alt="Generic placeholder"/>
                <Media body>
                  <Row>
                    <Col xl={12}>
                      <h6 className="mt-0">{JolioMark}<span> ( Developer )</span></h6>
                    </Col>
                  </Row>
                  <p>{SingleBlogParagraph}</p>
                </Media>
              </Media>
            </li>
          </ul>
        </li>
      ) : (
        <li>
          <Media className={` ${mainDivClassName}`}>
            <Image width={90} height={90} className="align-self-center" src={`${ImgPath}/blog/${ImageSrc}`} alt="Generic placeholder"/>
            <Media body>
              <Row>
                <Col md={4}>
                  <h6 className="mt-0">{JolioMark}<span> ( Designer )</span></h6>
                </Col>
                <CommonHitsAndComments />
              </Row>
              <p>{SingleBlogParagraph}</p>
            </Media>
          </Media>
        </li>
      )}
    </>
  );
};

export default UserComment;
