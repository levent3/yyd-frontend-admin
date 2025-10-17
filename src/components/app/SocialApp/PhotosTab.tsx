import { Col, Row, Card, CardBody } from "reactstrap";
import { ImgPath, photoDescription, PortfolioTitle } from "utils/Constant";
import { Gallery, Item } from "react-photoswipe-gallery";
import { photosTabData } from "Data/SocialApp";
import { Href } from "utils/Constant";
import Image from "next/image";

const PhotosTab = () => {
  return (
    <Col sm={12}>
      <Card>
        <CardBody className="my-gallery row gallery-with-description">
          <Gallery>
            {photosTabData &&
              photosTabData.map((item, i) => (
                <figure className="col-xl-3 col-sm-6 box-col-33" key={i}>
                  <Item
                    original={`${ImgPath}/${item}`}
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <div className="gallery-detail">
                        <a href={Href} onClick={open}>
                          <Image
                            width={303}
                            height={207}
                            className="img-thumbnail"
                            ref={
                              ref as React.MutableRefObject<HTMLImageElement>
                            }
                            src={`${ImgPath}/${item.src}`}
                            alt=""
                          />
                          <div className="caption">
                            <h4>{item.title}</h4>
                            <p>{photoDescription}</p>
                          </div>
                        </a>
                      </div>
                    )}
                  </Item>
                </figure>
              ))}
          </Gallery>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PhotosTab;
