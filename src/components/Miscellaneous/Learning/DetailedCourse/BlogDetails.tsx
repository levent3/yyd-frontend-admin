import {Comments,DetailedCourseHeading,DetailedCourseParagraph1,DetailedCourseParagraph2,Hits} from "utils/Constant";

const BlogDetails = () => {
  return (
    <div className="blog-details">
      <ul className=" blog-social d-block">
        <li className="digits">25 July 2023</li>
        <li>
          <i className="icofont icofont-user" />
          Mark <span>Jecno </span>
        </li>
        <li className="digits">
          <i className="icofont icofont-thumbs-up" />
          02 <span>{Hits}</span>
        </li>
        <li className="digits">
          <i className="icofont icofont-ui-chat" />
          {Comments}
        </li>
      </ul>
      <h4>{DetailedCourseHeading}</h4>
      <div className="single-blog-content-top">
        <p>{DetailedCourseParagraph1}</p>
        <p>{DetailedCourseParagraph2}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
