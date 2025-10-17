import Image from "next/image";
import { Card, Col } from "reactstrap";
import { Hits, ImgPath, MarkJecno, SearchDesc, SearchImageTime } from "utils/Constant";
import InformationCommon from "./common/InformationCommon";
import { searchInformation, searchInformation2 } from "Data/SearchTabs";

const SearchBanner = () => {
  return (
    <Col xxl={4} xl={6} className="box-col-12 mt-xl-4 mt-3">
      <Card className="o-hidden">
        <div className="blog-box blog-shadow">
          <Image width={410} height={256} className="img-fluid" src={`${ImgPath}/blog/blog.jpg`} alt="blog" />
          <div className="blog-details">
            <p>{SearchImageTime}</p>
            <h4>{SearchDesc}</h4>
            <ul className="blog-social">
              <li><i className="icofont icofont-user"></i>{MarkJecno}</li>
              <li><i className="icofont icofont-thumbs-up"></i>{Hits}</li>
            </ul>
          </div>
        </div>
      </Card>
      <InformationCommon item={searchInformation} />
      <InformationCommon item={searchInformation2} />
    </Col>
  );
};

export default SearchBanner;
