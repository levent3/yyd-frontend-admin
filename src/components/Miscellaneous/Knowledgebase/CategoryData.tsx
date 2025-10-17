import { Archive, FileText, ArrowRight } from "react-feather";
import { Card, CardBody, Col, Row } from "reactstrap";
import { knowledgeBaseData } from "Data/knoweldgebase";
import { knowledgearticl, Href, BrowseArticles } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const CategoryData = () => {
  return (
    <Col sm={12}>
      <div className="header-faq">
        <h5 className="mb-0">{knowledgearticl}</h5>
      </div>
      <Row>
        <Col sm={12}>
          <Card>
            <CommonCardHeading smallHeading={BrowseArticles} />
            <CardBody className="pb-0">
              <Row className="browse">
                {knowledgeBaseData.map((data) => (
                  <Col xl={4} md={6} key={data.id} className="xl-50 box-col-6">
                    <div className="browse-articles browse-bottom">
                      <h6> <span><Archive /></span> {data.title}</h6>
                      <ul>
                        {data.knowledgeList &&
                          data.knowledgeList.map((data, index2) => (
                            <li key={index2}>
                              <a href={Href}>{data.fileTextIcon ? (<span><FileText /></span>) : (<span><ArrowRight /></span>)}
                                <span>{data.text}</span>
                                {data.badge ? (<span className="badge badge-primary pull-right">{data.badge}</span>) : (" ")}
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};
export default CategoryData;
