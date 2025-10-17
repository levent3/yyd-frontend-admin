import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { userCardData } from "Data/SocialApp";
import Image from "next/image";
import { Followers, Following, Href, ImgPath, Posts } from "utils/Constant";
import SocialMediaIcons from "CommonElements/SocialMediaIcons";

const AllCards = () => {
  return (
    <Fragment>
      {userCardData.map((item) => (
        <Col sm={6} xxl={3} xl={4} className="box-col-4 col-ed-4" key={item.id}>
          <Card className="social-profile">
            <CardBody>
              <div className="social-img-wrap">
                <div className="social-img">
                  <Image
                    width={68}
                    height={68}
                    src={`${ImgPath}/${item.avatar}`}
                    alt="user"
                  />
                </div>
                <div className="edit-icon"></div>
              </div>
              <div className="social-details">
                <h5 className="mb-1">
                  <a href={Href}>{item.name}</a>
                </h5>
                <span className="f-light">{item.email}</span>
                <ul className="card-social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://accounts.google.com/" target="_blank">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://rss.app/" target="_blank">
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                </ul>
                <ul className="social-follow">
                  <li>
                    <h5 className="mb-0">{item.totalPost}</h5>
                    <span className="f-light">{Posts}</span>
                  </li>
                  <li>
                    <h5 className="mb-0">{item.follower}</h5>
                    <span className="f-light">{Followers}</span>
                  </li>
                  <li>
                    <h5 className="mb-0">{item.following}</h5>
                    <span className="f-light">{Following}</span>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default AllCards;
