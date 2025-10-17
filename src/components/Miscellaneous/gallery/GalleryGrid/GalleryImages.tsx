import { Gallery, Item } from "react-photoswipe-gallery";
import { galleryImagePath } from "Data/gallery";
import { Href, ImgPath } from "utils/Constant";
import Image from "next/image";

const GalleryImages = () => {
  return (
    <Gallery>
      {galleryImagePath.map((item, i) => (
        <figure className="col-xl-3 col-md-4 col-6" key={i}>
          <Item original={`${ImgPath}/${item}`} width="1600" height="950">
            {({ ref, open }) => (
              <a href={Href} onClick={open}>
                <Image height={500} width={500} className="img-thumbnail" ref={ref as React.MutableRefObject<HTMLImageElement>} src={`${ImgPath}/${item}`} alt="image"/>
              </a>
            )}
          </Item>
        </figure>
      ))}
    </Gallery>
  );
};

export default GalleryImages;
