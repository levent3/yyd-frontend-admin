import { Href } from "utils/Constant";
import ShowRatings from "../ShowRatings";
import { informationCommonPropsType } from "Types/SearchWebSite";


const InformationCommon = ({ item }: informationCommonPropsType) => {
  return (
    <div className="info-block">
      <a href={Href}>{item.url}</a>
      <h6>{item.title}</h6>
      <p>{item.detail}</p>
      <div className="star-ratings">
        <ul className="search-info">
          {item.showStar ? <ShowRatings item={item.showStar} /> : ""}
          <li>{item.star}</li>
          <li>{item.vote}</li>
          <li>{item.news}</li>
        </ul>
      </div>
    </div>
  );
};

export default InformationCommon;
