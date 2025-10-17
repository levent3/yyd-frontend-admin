import { Card, Col, Row } from "reactstrap";
import NavBarMain from "./NavBarMain";
import UserProfileIcon from "./UserProfileIcon";
import Image from "next/image";
import { ImgPath } from "utils/Constant";
import { Href } from '../../../../utils/Constant/index';
export interface propsType {
  callback: (tab: number) => void;
}

const UserProfile = ({ callback }: propsType) => {
  return (
    <Row>
      <Col sm={12} className="box-col-12">
        <Card className="hovercard text-center">
          <div className="cardheader socialheader" />
          <div className="user-image">
            <div className="avatar">
              <Image width={100} height={100} alt="user" src={`${ImgPath}/user/1.jpg`} />
            </div>
            <div className="icon-wrapper">
              <a href={Href}><i className="icofont icofont-pencil-alt-5" /></a>
            </div>
            <UserProfileIcon />
          </div>
          <div className="info market-tabs p-0">
            <NavBarMain callback={callback} />
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfile;
