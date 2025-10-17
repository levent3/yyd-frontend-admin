import { Col } from "reactstrap";
import Image from "next/image";
import { Comment, ImgPath } from "utils/Constant";
import UserComment from "../../Blog/SingleBlog/common/UserComment";
import BlogDetails from "./BlogDetails";

const BlogSingle = () => {
  return (
    <Col xl={9} className="xl-60 order-xl-0 order-1 box-col-12">
      <div className="blog-single">
        <div className="blog-box blog-details">
          <Image width={1098}  height={686} className="img-fluid w-100" src={`${ImgPath}/faq/learning-1.png`} alt="blog-main"/>
            <BlogDetails />
        </div>
        <section className="comment-box">
          <h4>{Comment}</h4>
          <hr />
          <ul>
            <UserComment ImageSrc="comment.jpg" mainDivClassName="align-self-center"/>
            <UserComment ImageSrc="comment.jpg" mainDivClassName="align-self-center" userReplay={true}/>
            <UserComment ImageSrc="4.jpg" />
          </ul>
        </section>
      </div>
    </Col>
  );
};

export default BlogSingle;
