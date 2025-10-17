import { CardBody, Collapse, Media } from "reactstrap";
import { followingsData } from "Data/SocialApp";
import { AddFriend, Href, ImgPath } from "utils/Constant";
import Image from "next/image";
interface propsType {
  isFilter: boolean;
}
const FollowingsCardCollapse = ({ isFilter }: propsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-list filter-cards-view">
        {followingsData.map((data, index) => (
          <Media key={index}>
            <Image
              width={50}
              height={50}
              className="img-50 img-fluid m-r-20 rounded-circle"
              alt="image"
              src={`${ImgPath}/user/${data.imageName}`}
            />
            <Media body >
              <span className="d-block">{data.name}</span>
              <a href={Href}>{AddFriend}</a>
            </Media>
          </Media>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default FollowingsCardCollapse;
