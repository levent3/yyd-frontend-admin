import Image from "next/image";
import { Col } from "reactstrap";
import { ImgPath } from "utils/Constant";

const SearchNotFoundClass = () => {
  return (
    <Col sm={12}>
      <div>
        <div className="search-not-found text-center">
          <Image
            width={100}
            height={100}
            src={`${ImgPath}/search-not-found.png`}
            alt="image"
            className="second-search"
            style={{ display: "inline" }}
          />
          <p className="mb-0">{"Sorry, Not Found Any Contact"}</p>
        </div>
      </div>
    </Col>
  );
};

export default SearchNotFoundClass;
