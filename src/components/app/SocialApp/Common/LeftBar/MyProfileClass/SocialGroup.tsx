import { socialGroupData } from "Data/SocialApp";
import Image from "next/image";
import { UncontrolledTooltip } from "reactstrap";
import { ImgPath } from "utils/Constant";

const SocialGroup = () => {
  return (
    <ul className="justify-content-center">
      {socialGroupData.map((data, index) => (
        <li className="d-inline-block" key={index}>
          <Image
            width={30}
            height={30}
            className="img-30 rounded-circle"
            src={`${ImgPath}/user/${data.imageName}`}
            alt="Img"
            id={`UncontrolledTooltipExample-${index}`}
          />
          <UncontrolledTooltip
            placement="top"
            target={`UncontrolledTooltipExample-${index}`}
          >
            {data.userName}
          </UncontrolledTooltip>
        </li>
      ))}
    </ul>
  );
};

export default SocialGroup;
