import { Card, Col } from "reactstrap";
import ListOfBlogWithoutDetails from './ListOfBlogWithoutDetails';
import Image from "next/image";
import { ImgPath } from "utils/Constant";

const BlogWithoutDetails = () => {
  let blogData = ["blog-5.jpg", "blog-6.jpg", "blog-5.jpg", "blog-6.jpg"];
  return (
    <>
      {blogData.map((data, index) => (
        <Col md={6} xxl={3} className="box-col-6" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center">
              <Image width={355} height={220} className="img-fluid top-radius-blog" src={`${ImgPath}/blog/${data}`} alt="blog" />
              <ListOfBlogWithoutDetails />
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BlogWithoutDetails;
