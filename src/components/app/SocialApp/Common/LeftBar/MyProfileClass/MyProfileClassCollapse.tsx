import { CardBody, Collapse, Media } from "reactstrap"
import MessagesAndNotification from "./MessagesAndNotification"
import LikesViewButton from "./LikesViewButton"
import { ImgPath, NewLikesThisWeek } from "utils/Constant"
import SocialGroup from "./SocialGroup"
import Image from "next/image"
interface propsType {
  isFilter: boolean
}
const MyProfileClassCollapse = ({ isFilter }: propsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="socialprofile filter-cards-view">
        <Media>
          <Image width={50} height={50} className="img-50 img-fluid m-r-20 rounded-circle" src={`${ImgPath}/user/1.jpg`} alt="user" />
          <MessagesAndNotification />
        </Media>
        <LikesViewButton />
        <div className="likes-profile text-center">
          <h5><span><i className="fa fa-heart font-danger" /> 884</span></h5>
        </div>
        <div className="text-center">35 {NewLikesThisWeek}</div>
        <div className="customers text-center social-group">
          <SocialGroup />
        </div>
        <Image width={318} height={212} className="img-fluid mt-5 w-100" alt="timeline-image" src={`${ImgPath}/social-app/timeline-3.png`} />

      </CardBody>
    </Collapse>
  )
}

export default MyProfileClassCollapse