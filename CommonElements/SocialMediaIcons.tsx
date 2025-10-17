import { socialMediaIconsData } from "Data/SocialMediaIconsData";
import { socialMediaIconsPropsTypes } from "Types/CommonElementType";

const SocialMediaIcons = ({ listClassName }: socialMediaIconsPropsTypes) => {
  return (
    <ul className={`justify-content-center  ${listClassName ? listClassName : ""}`} >
      {socialMediaIconsData.map((data, index) => (
        <li key={index}>
          <a href={data.link}>
            <i className={`fa ${data.iconClassName} me-0`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
