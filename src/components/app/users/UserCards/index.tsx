import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Image from "next/image";
import { Href, ImgPath } from "utils/Constant";
import SvgIcon from "CommonElements/Icons/SvgIcon";
import SocialMediaIcons from "CommonElements/SocialMediaIcons";
import UserCardsFooter from "./UserCardsFooter";
import { userCardData } from "Data/Users";

const UserCardsContainer = () => {
  return (
    <Container fluid>
      <Row className="user-cards-items">
        {userCardData.map((item) => (
          <Col xl={4} sm={6} xxl={3} className="col-ed-4 box-col-4" key={item.id}>
            <Card className="social-profile">
              <CardBody>
                <div className="social-img-wrap">
                  <div className="social-img">
                    <Image width={68} height={68} src={`${ImgPath}/${item.avatar}`} className="img-fluid" alt="user" />
                  </div>
                  <div className="edit-icon">
                    <SvgIcon iconId="profile-check" />
                  </div>
                </div>
                <div className="social-details">
                  <h5 className="mb-1">
                    <a href={Href}>{item.name}</a>
                  </h5>
                  <span className="f-light">{item.userProfile}</span>
                  <SocialMediaIcons listClassName="card-social" />
                  <UserCardsFooter item={item} />
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserCardsContainer;
