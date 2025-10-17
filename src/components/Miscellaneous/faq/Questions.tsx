import { Fragment } from "react";
import { Row, Col } from "reactstrap";
import AccordionCard from "./AccordionCard";
import FaqRightsidebae from "./FaqRightside";
import { QuickQuestions } from "utils/Constant";
import { faqQuestionsData } from "Data/faq";

const Questions = () => {
  return (
      <Col lg={12}>
        <div className="header-faq">
          <h5 className="mb-0">{QuickQuestions}</h5>
        </div>
        <Row className="default-according style-1 faq-accordion">
          <Col xl={8} lg={6} md={7} className="box-col-60  xl-60">
            {faqQuestionsData.map((item, i) => (
              <Fragment key={i}>
                {item.subTitle && (
                  <div className="faq-title">
                    <h6>{item.subTitle}</h6>
                  </div>
                )}
                {faqQuestionsData[i].titles.map((item, id) => (
                  <AccordionCard key={id} item={item} />
                ))}
              </Fragment>
            ))}
          </Col>
          <FaqRightsidebae />
        </Row>
      </Col>
  );
};
export default Questions;
