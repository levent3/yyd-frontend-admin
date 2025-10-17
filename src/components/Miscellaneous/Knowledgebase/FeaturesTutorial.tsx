import { Card, CardBody, CardFooter, Col } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import { featuredData } from "Data/faq";
import Image from "next/image";
import { ImgPath, StarColor } from "utils/Constant";
import ProductHover from "./ProductHover";

const FeaturesTutorial = () => {

  return (
    <>
      {featuredData.map((item, id) => (
        <Col xl={3} md={6} className="xl-50 box-col-6" key={id}>
          <Card className="features-faq product-box">
            <div className="faq-image product-img">
              <div className="knowledgebase-image">
                <Image width={379} height={284} alt="feature" className="img-fluid" src={`${ImgPath}/${item.img}`} />
              </div>
              <ProductHover />
            </div>
            <CardBody>
              <h6>{item.title}</h6>
              <p>{item.short_description}</p>
            </CardBody>
            <CardFooter className="d-flex align-items-center justify-content-between">
              <span>{item.date}</span>
              <Rating fillColor={StarColor} initialValue={Math.random() * 5} size={17} />
            </CardFooter>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default FeaturesTutorial;
