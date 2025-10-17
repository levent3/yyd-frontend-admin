import Image from "next/image";
import { Card, Col, Row } from "reactstrap";
import { Admin, BlogBy, BlogWithDetailHeading, BlogWithoutDetailHeading, Hits, ImgPath } from "utils/Constant";

const BlogWithDetails = () => {
  let BlogData = [{ image: "2", hits: "0", date: "02" }, { image: "3", hits: "02", date: "03" },];
  return (
    <Col xl={6} className="set-col-12 box-col-12">
      {BlogData.map((data, index) => (
        <Card key={index}>
          <Row className="blog-box blog-list">
            <Col sm={5}>
              <Image width={290} height={220} className="img-fluid sm-100-w w-100" src={`${ImgPath}/blog/blog-${data.image}.jpg`} alt="images" />
            </Col>
            <Col sm={7}>
              <div className="blog-details">
                <div className="blog-date digits">
                  <span>{data.date}</span> January 2023
                </div>
                <h6>{BlogWithoutDetailHeading}</h6>
                <div className="blog-bottom-content">
                  <ul className="blog-social flex-row ">
                    <li>{BlogBy} {Admin}</li>
                    <li className="digits">{data.hits} {Hits}</li>
                  </ul>
                  <hr />
                  <p className="mt-0">{BlogWithDetailHeading}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </Col>
  );
};

export default BlogWithDetails;
