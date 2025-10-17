import PersonalDetail from "./PersonalDetail";
import EducationClass from "./Education";
import ExperienceClass from "./Experience";
import UploadFileClass from "./UploadFile";
import { Button, Card, CardBody, CardFooter, Media } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";
import { Cancel, CubaText, Href, ImgPath, PersonalDetails, Savethisjob, Submit, UIDesigner, UploadYourFiles, YourEducation, YourExperience } from "utils/Constant";

const JobApply = () => {
  return (
    <Card>
      <div className="job-search">
        <CardBody className="pb-0">
          <Media>
            <Image width={40} height={40} className="img-40 img-fluid  m-r-20" src={`${ImgPath}/job-search/1.jpg`} alt="" />
            <Media body className="w-100">
              <h6 className="f-w-600">
                <a href={Href}>{UIDesigner}</a>
                <span className="pull-right">
                  <Button color="primary"><span><i className="fa fa-check text-white" /></span>{Savethisjob}</Button>
                </span>
              </h6>
              <p>{CubaText} <Rating className="rating ms-1" initialValue={Math.random() * 5} size={15} /></p>
            </Media>
          </Media>
          <div className="job-description">
            <h6 className="mb-0">{PersonalDetails}</h6>
            <PersonalDetail />
            <h6 className='mb-0'>{YourEducation}</h6>
            <EducationClass />
            <h6 className='mb-0' >{YourExperience}</h6>
            <ExperienceClass />
            <h6 className='mb-0'>{UploadYourFiles}</h6>
            <UploadFileClass />
          </div>
        </CardBody>
        <CardFooter>
          <Button color="primary mx-1">{Submit}</Button>
          <Button color="light">{Cancel}</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default JobApply;
