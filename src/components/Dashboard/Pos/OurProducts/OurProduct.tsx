import { ourProductsData } from "Data/Dashboard/Pos";
import Image from "next/image";
import { Col, Row } from "reactstrap";
import { ImgPath } from "utils/Constant";
import ProductContent from "./ProductContent";

const OurProduct = () => {
  return (
    <Row className="g-3 scroll-product">
      {ourProductsData.map((data, index) => (
        <Col xxl={3} sm={4} key={index}>
          <div className="our-product-wrapper h-100 widget-hover">
            <div className="our-product-img">
              <Image width={157} height={110} src={`${ImgPath}/dashboard-8/product-categories/${data.imageName}`} alt="watch"/>
            </div>
            <ProductContent data={data} />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default OurProduct;
