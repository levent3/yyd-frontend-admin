import { Card, Col } from "reactstrap";
import MarkjencoBlogDetails from "./MarkjencoBlogDetails";
import Image from "next/image";
import { ImgPath } from "utils/Constant";

const MarkjencoBlog = () => {
  return (
    <Col xl={6} className="set-col-12 box-col-12">
      <Card>
        <div className="blog-box blog-shadow">
          <Image width={750} height={460} className="img-fluid" src={`${ImgPath}/blog/blog.jpg`} alt="blog image"/>
          <MarkjencoBlogDetails />
        </div>
      </Card>
    </Col>
  );
};

export default MarkjencoBlog;
