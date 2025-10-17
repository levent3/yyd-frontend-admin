import { Comments, Hits, MarkJecno, MarkJecnoBlog } from "utils/Constant";

const MarkjencoBlogDetails = () => {
  return (
    <div className="blog-details">
      <p className="digits">25 July 2023</p>
      <h4>{MarkJecnoBlog}</h4>
      <ul className="blog-social flex-row simple-list d-block">
        <li>
          <i className="icofont icofont-user" />
          {MarkJecno}
        </li>
        <li className="digits">
          <i className="icofont icofont-thumbs-up" />
          02 {Hits}
        </li>
        <li className="digits">
          <i className="icofont icofont-ui-chat" />
          {Comments}
        </li>
      </ul>
    </div>
  );
};

export default MarkjencoBlogDetails;
