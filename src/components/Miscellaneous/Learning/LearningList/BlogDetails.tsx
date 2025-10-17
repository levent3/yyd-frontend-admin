import { BlogBy, BlogHeading, Hits } from "utils/Constant";

interface BlogDetailsType {
  text: string;
}

const BlogDetails = ({ text }: BlogDetailsType) => {
  return (
    <div className="blog-details-main">
      <ul className="blog-social">
        <li className="digits">9 April 2023</li>
        <li className="digits">{BlogBy}Admin</li>
        <li className="digits">0 {Hits}</li>
      </ul>
      <hr />
      <h6 className="blog-bottom-details">{text}</h6>
    </div>
  );
};

export default BlogDetails;
