import { Card, CardBody, Media } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import { jobData } from "Data/jobs";
import Image from "next/image";
import { ImgPath } from "utils/Constant";
import { Href } from 'utils/Constant';

const ListViewCard = () => {
  return (
    <>
      {jobData.slice(0, 8).map((item) => (
        <Card key={item.id} className={`${item.ribbion ? "ribbon-vertical-left-wrapper" : ""}`}>
          {item.ribbion ? (
            <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!item.ribbion && "d-none"}`}>
              <i className="icofont icofont-love"></i>
            </div>
          ) : ("")}
          <div className="job-search">
            <CardBody>
              <Media>
                <Image className="img-40 img-fluid m-r-20" width={40} height={40} src={`${ImgPath}/${item.logo}`} alt="job logo" />
                <Media body className="w-100">
                  <h6>
                    <a href={Href}>{item.job_name}</a>
                    {item.type === "new" ? (<span className="badge badge-primary pull-right">{item.badgeValue}</span>) : (<span className="pull-right">{item.type}</span>)}
                  </h6>
                  <p>
                    {item.job_area}, {item.job_city}
                    <Rating className="rating ms-1" initialValue={Math.random() * 5} size={14} />
                  </p>
                </Media>
              </Media>
              <p>{item.Job_description}</p>
            </CardBody>
          </div>
        </Card>
      ))}
    </>
  );
};
export default ListViewCard;
