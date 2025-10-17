import Image from "next/image";
import { ImgPath } from "utils/Constant";
import CommonLogo from "../common/CommonLogo";
import { stepperHorizontalData } from "Data/OthersPageData";
interface propsType {
  level: number;
}
const SideBarList = ({ level }: propsType) => {

  return (
    <ul className="anchor">
      <li><CommonLogo /></li>
      {stepperHorizontalData.map((data, index) => (
        <li key={index}>
          <a href={`#form-${index}`} className={`${level === index + 1 ? "selected" : level > index + 1 ? "done" : "disabled"}`} >
            <h4>{index + 1}</h4>
            <h5>
              {data.tittle}
              {data.tittle === "Done" ? (<i className="fa fa-thumbs-o-up ms-2" />) : (" ")}
            </h5>
            <small>{data.detail}</small>
          </a>
        </li>
      ))}
      <li>
        <Image width={400} height={300} className="img-fluid for-light" src={`${ImgPath}/login/icon.png`} alt="looginpage" />
      </li>
    </ul>
  );
};

export default SideBarList;
