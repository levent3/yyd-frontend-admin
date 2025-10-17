import Image from "next/image";
import { MoreVertical } from "react-feather";
import { Media } from "reactstrap";
import { ELANAHeading, ImgPath } from "utils/Constant";

const NewUsersSocial = () => {
  return (
    <div className="new-users-social">
      <Media>
        <Image
          width={58}
          height={58}
          className="rounded-circle image-radius m-r-15"
          src={`${ImgPath}/user/1.jpg`}
          alt="user121"
        />
        <Media body>
          <h6 className="mb-0 f-w-700">{ELANAHeading}</h6>
          <p>January, 12,2023</p>
        </Media>
        <span className="pull-right mt-0">
          <MoreVertical />
        </span>
      </Media>
    </div>
  );
};

export default NewUsersSocial;
