import {  descriptionBookMarkPropsType } from "Types/BookMarkTypes";
import { Href } from "utils/Constant";
import { Tag,Edit2, Link, Share2, Trash2 } from "react-feather";

const DescriptionData = ({ data, OnHandleClick, removeFromBookMark}: descriptionBookMarkPropsType) => {
  const { title, website_url,  id } = data;
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <h6 className="title_0">{title} </h6>
        <p className="weburl_0">{website_url}</p>
        <div className="hover-block">
          <ul>
            <li><a href={Href} onClick={() => OnHandleClick(data)}><Edit2 /></a></li>
            <li><a href={Href}><Link /></a></li>
            <li><a href={Href}><Share2 /></a></li>
            <li><a href={Href} onClick={() => removeFromBookMark(id)}><Trash2 /></a></li>
            <li className="pull-right text-end"><a href={Href}><Tag /></a></li>
          </ul>
        </div>
        <div className="content-general">
          <p className="desc_3">{data.desc}</p>
          <span className="collection_3">{data.collection}</span>
        </div>
      </div>
    </div>
  );
};

export default DescriptionData;
