import { Button, Card, CardBody, Media, Row } from "reactstrap";
import JobDescription from "./jobDescription";
import { Rating } from "react-simple-star-rating";
import SimilarjobsCards from "./SimilarjobsCards";
import Image from "next/image";
import { Href,ApplyForThisJob,CubaUnitedStates, SimilarJobs, ImgPath } from "utils/Constant";

const MainCard = () => {
  return (
    <>
      <Card>
        <div className="job-search">
          <CardBody>
            <Media>
              <Image width={40} height={40} className="img-40 img-fluid m-r-20" src={`${ImgPath}/job-search/1.jpg`} alt="job-search"/>
              <Media body>
                <h6 className="f-w-600">
                  <a href={Href}>Product Designer (UI/UX Designer)</a>
                  <span className="pull-right">
                    <Button color="primary">{ApplyForThisJob}</Button>
                  </span>
                </h6>
                <p>{CubaUnitedStates}
                  <Rating className="ms-1" fillColor="#ff5f24" initialValue={Math.random() * 5} size={17}/>
                </p>
              </Media>
            </Media>
            <JobDescription />
          </CardBody>
        </div>
      </Card>
      <div className="header-faq">
        <h5 className="mb-0 f-w-600">{SimilarJobs}</h5>
      </div>
      <Row>
        <SimilarjobsCards  limit={5} jobClass={'col-xl-6 xl-100 box-col-12'} ribbion={false} col12={true}/> 
      </Row>
    </>
  );
};

export default MainCard;