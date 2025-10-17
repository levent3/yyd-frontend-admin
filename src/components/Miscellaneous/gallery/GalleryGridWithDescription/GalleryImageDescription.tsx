import { Gallery, Item } from "react-photoswipe-gallery";
import { galleryImagePath } from "Data/gallery";
import { Href, Imagedescription, ImgPath, MyPortfolioTitle } from "utils/Constant";
import Image from "next/image";

const GalleryImageDescription = () => {
  return (
    <Gallery>
      {galleryImagePath.map((item, index) => (
        <figure key={index} className="col-xl-3 col-sm-6 box-col-25">
          <Item original={`${ImgPath}/${item}`} width="1024" height="768" caption="images">
            {({ ref, open }) => (
              <div className="gallery-detail">
                <a href={Href} onClick={open}>
                  <Image height={500} width={500} className="img-thumbnail" ref={ref as React.MutableRefObject<HTMLImageElement>} src={`${ImgPath}/${item}`} alt="thumbnail" />
                  <div className="caption">
                    <h4>{MyPortfolioTitle}</h4>
                    <p>{Imagedescription}</p>
                  </div>
                </a>
              </div>
            )}
          </Item>
        </figure>
      ))}
    </Gallery>
  );
};

export default GalleryImageDescription;
