import { mainLearningCardsDatas } from "Data/Learning";
import Image from "next/image";
import { Card, Col, Row } from "reactstrap";
import { ImgPath, LearningCardsDetails } from "utils/Constant";


const MainLearningCards = () => {
  return (
    <>
      {mainLearningCardsDatas.map((data, index) => (
        <Col xl={12} key={index}>
          <Card>
            <Row className="blog-box blog-list ">
              <Col sm={5}>
                <Image width={445} height={345} className="img-fluid sm-100-w" src={`${ImgPath}/faq/${index + 1}.jpg`} alt="blog-image"/>
              </Col>
              <Col sm={7}>
                <div className="blog-details">
                  <div className="blog-date digits"><span>{data.dateSpan}</span> {data.date}</div>
                  <h6>{data.language}</h6>
                  <div className="blog-bottom-content">
                    <ul className="blog-social">
                      <li>by: {data.learningCardBy}</li>
                      <li className="digits">{data.hits} Hits</li>
                    </ul>
                    <hr />
                    <p className="mt-0">{LearningCardsDetails}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default MainLearningCards;
