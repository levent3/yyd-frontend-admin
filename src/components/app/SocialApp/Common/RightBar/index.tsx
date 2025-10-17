import { Card, Col } from "reactstrap";
import ProfileIntroCard from "./ProfileIntroCard";
import FollowerCard from "./FollowerCard";
import FollowingsCard from "./FollowingsCard";
import LatestPhotos from "./LatestPhotos";
import FriendsCard from "./FriendsCard";
import Image from "next/image";
import { ImgPath } from "utils/Constant";

const RightBar = () => {
  return (
    <>
      <Col xl="12" className="xl-50 box-col-6">
        <ProfileIntroCard />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <FollowerCard />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <FollowingsCard />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <LatestPhotos />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <FriendsCard />
      </Col>
      <Col xl="12" className="xl-50 box-col-6">
        <Card>
          <Image
            className="img-fluid w-100"
            width={360}
            height={240}
            src={`${ImgPath}/social-app/timeline-4.png`}
            alt="timeline"
          />
        </Card>
      </Col>
    </>
  );
};

export default RightBar;
