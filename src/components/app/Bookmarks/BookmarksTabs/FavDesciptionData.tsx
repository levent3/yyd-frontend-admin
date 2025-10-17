import { Href } from "utils/Constant";
import { Tag,Edit2, Link, Share2, Trash2 } from "react-feather";
import { favoriteBookMalapropsType } from "Types/BookMarkTypes";


const FavDescriptionData = ({ myBookData}: favoriteBookMalapropsType) => {
  const { title, website_url,collection,desc } = myBookData;
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <h6 className="title_0">{title}</h6>
        <p className="weburl_0">{website_url}</p>
        <div className="hover-block">
          <ul className="simple-list flex-row">
            <li><a href={Href} ><Edit2 /></a></li>
            <li><a href={Href}><Link /></a></li>
            <li><a href={Href}><Share2 /></a></li>
            <li><a href={Href} ><Trash2 /></a></li>
            <li className="pull-right text-end"><a href={Href}><Tag /></a></li>
          </ul>
        </div>
        <div className="content-general">
          <p className="desc_3">{desc}</p>
          <span className="collection_3">{collection}</span>
        </div>
      </div>
    </div>
  );
};

export default FavDescriptionData;
