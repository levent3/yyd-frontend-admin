import { Comments, Hits, Jecno, Mark, SingleBlogHeading, SingleBlogParagraph1, SingleBlogParagraph2 } from "utils/Constant";

const SingleBlogDetails = () => {
  return (
    <div className="blog-details">
      <ul className="blog-social flex-row simple-list d-block">
        <li>25 July 2023</li>
        <li><i className="icofont icofont-user" />{Mark} <span>{Jecno} </span></li>
        <li className="digits"><i className="icofont icofont-thumbs-up" /> 02<span>{Hits}</span></li>
        <li className="digits"><i className="icofont icofont-ui-chat" /> {Comments}</li>
      </ul>
      <h4>{SingleBlogHeading}</h4>
      <div className="single-blog-content-top">
        <p>{SingleBlogParagraph1}</p>
        <p>{SingleBlogParagraph2}</p>
      </div>
    </div>
  );
};

export default SingleBlogDetails;
