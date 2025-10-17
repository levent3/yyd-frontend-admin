import { Collapse, CardBody, Media } from "reactstrap";
import { Ago, CommentedOn, Href, ImgPath, Photo } from "utils/Constant";
import { FriendsData } from "Data/SocialApp";
import Image from "next/image";
interface propsType {
  isFilter: boolean;
}
const ActivityFeedCollapse = ({ isFilter }: propsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-status filter-cards-view">
        {FriendsData.map((data, index) => (
          <Media key={index}>
            <Image width={50} height={50} className="img-50 rounded-circle m-r-15" src={`${ImgPath}/user/${data.imageName}`} alt="user"/>
            <Media body>
              <span className="f-w-600 d-block">{data.title}</span>
              <p>{CommentedOn} {"Shaun Park's "}<a href={Href}>{Photo}</a></p>
              <span className="light-span">{data.time} {Ago}</span>
            </Media>
          </Media>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default ActivityFeedCollapse;
