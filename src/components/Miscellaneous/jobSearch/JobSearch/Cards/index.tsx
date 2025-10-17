import { Fragment } from "react";
import { Card, Col, CardBody, Media, Badge } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import { jobData } from "Data/jobs";
import Image from "next/image";
import { ImgPath, Href } from 'utils/Constant';
import Link from "next/link";

const CardsClass = () => {
  return (
    <Fragment>
      {jobData &&
        jobData.map((item) => (
          <Col xl={6} className={"xl-100"} key={item.id}>
            <Card className={`${item.ribbion ? "ribbon-vertical-left-wrapper" : ""}`}>
              {item.ribbion ? (
                <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!item.ribbion && "d-none"}`}>
                  <i className="icofont icofont-love"></i>
                </div>
              ) : ("  ")}
              <div className="job-search">
                <CardBody>
                <Media>
                    <Image width={40} height={40} className="img-40 img-fluid m-r-20" src={`${ImgPath}/${item.logo}`} alt="job" />
                    <Media body className="w-100">
                      <h6>
                        <Link href={Href}>{item.job_name}</Link>
                        {item.type === "new" ? (<Badge color="primary" className="pull-right">{item.badgeValue}</Badge>) : (<span className="pull-right">{item.type}</span>)}
                      </h6>
                      <p>
                        {item.job_area}, {item.job_city}
                        <span>
                        <Rating className="ms-1" fillColor="#ff5f24" initialValue={Math.random() * 5} size={17} />
                        </span>
                      </p>
                    </Media>
                  </Media>
                  <p>{item.Job_description}</p>
                </CardBody>
              </div>
            </Card>
          </Col>
        ))}
    </Fragment>
  );
};
export default CardsClass;
