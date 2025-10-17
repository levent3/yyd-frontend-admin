import { BlogBy, Hits, blogwithoutDetails } from 'utils/Constant';

const ListOfBlogWithoutDetails = () => {
  return (
    <div className="blog-details-main">
      <ul className="blog-social flex-row simple-list">
        <li className="digits">9 April 2023</li>
        <li className="digits">{BlogBy} Admin</li>
        <li className="digits">0 {Hits}</li>
      </ul>
      <hr />
      <h6 className="blog-bottom-details">{blogwithoutDetails}</h6>
    </div>
  );
};

export default ListOfBlogWithoutDetails;
