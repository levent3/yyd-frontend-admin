import { Button, CardBody, Collapse } from "reactstrap";
import { profileIntroData } from "Data/SocialApp";
import { Fragment } from "react";
import {Dribbble,Facebook,SocialNetworks,Twitter,} from "utils/Constant";

interface propsTypes {
  isFilter: boolean;
}

const ProfileIntroCollapse = ({ isFilter }: propsTypes) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="filter-cards-view">
        {profileIntroData.map((data, index) => (
          <Fragment key={index}>
            <span className="f-w-600">{data.tittle} :</span>
            <p>{data.paragraph}</p>
          </Fragment>
        ))}
        <div className="social-network theme-form">
          <span className="f-w-600">{SocialNetworks}</span>
          <a href="https://www.facebook.com/"><Button color="transparent" className="social-btn btn-fb mb-2 text-center"><i className="fa fa-facebook m-r-5" />{Facebook}
          </Button></a>
          <a href="https://www.twitter.com/"><Button color="transparent" className="social-btn btn-twitter mb-2 text-center"><i className="fa fa-twitter m-r-5" />{Twitter}</Button></a>
          <a href="https://dribbble.com/session/new"><Button color="transparent" className="social-btn btn-google text-center"><i className="fa fa-dribbble m-r-5" />{Dribbble}</Button></a>
        </div>
      </CardBody>
    </Collapse>
  );
};

export default ProfileIntroCollapse;
