import { Card, CardBody, Col, Media, Row } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import { jobData } from "Data/jobs";
import Image from "next/image";
import Link from "next/link";
import { ImgPath } from "utils/Constant";
import { similarjobsCardsType } from "Types/JobsTyps";

const SimilarjobsCards = ({limit,jobClass,ribbion,col12,}: similarjobsCardsType) => {
  return (
    <Row>
      {jobData.slice(0, 5).map((item) => (
        <Col
          className={`col-auto ${limit === item.id && col12? "col-xl-12 xl-100": jobClass}`} key={item.id}>
          <Card className={`${item.ribbion && ribbion ? "ribbon-vertical-left-wrapper" : ""}`}>
            {item.ribbion ? (
              <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!ribbion && "d-none"}`}>
                <i className="icofont icofont-love"></i>
              </div>
            ) : (" ")}
            <div className="job-search">
              <CardBody>
                <Media>
                  <Image width={40} height={40}  className="img-40 img-fluid m-r-20" src={`${ImgPath}/${item.logo}`} alt=""/>
                  <Media body >
                    <h6>
                      <Link href={`${process.env.PUBLIC_URL}/apps/job/job-details`}>{item.job_name}</Link>
                      {item.type === "new" && (<span className="badge badge-primary pull-right ms-2">{item.badgeValue}</span>)}
                    </h6>
                    <p>
                      {item.job_area}, {item.job_city}
                      <Rating className="ms-1" fillColor="#ff5f24" initialValue={Math.random() * 5} size={17}/>
                    </p>
                  </Media>
                </Media>
                <p>{item.Job_description}</p>
              </CardBody>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default SimilarjobsCards;
