import { CardBody, Collapse, FormGroup, Input, Media } from "reactstrap";
import { mutualFriendData } from "Data/SocialApp";
import Image from "next/image";
import { ImgPath } from "utils/Constant";
interface propsType {
  isFilter: boolean;
}
const MutualFriendsCollapase = ({ isFilter }: propsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-status filter-cards-view">
        {mutualFriendData.map((data, index) => (
          <Media key={index}>
            <Image
              width={50}
              height={50}
              className="img-50 rounded-circle m-r-15"
              src={`${ImgPath}/user/${data.imageName}`}
              alt="user"
            />
            <div className={`social-status ${data.socialClass}`} />
            <Media body>
              <span className="f-w-600 d-block">{data.title}</span>
              <span className="d-block">{data.email}</span>
            </Media>
          </Media>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default MutualFriendsCollapase;
