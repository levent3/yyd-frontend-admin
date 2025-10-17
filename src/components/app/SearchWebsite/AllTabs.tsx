import { SearchPixelStrap, Href } from "utils/Constant";
import { Col, Row } from "reactstrap";
import PagesSort from "./Pages";
import SearchBanner from "./SearchBanner";
import { searchTabsData } from "Data/SearchTabs";
import InformationCommon from "./common/InformationCommon";

const AllTabs = () => {
  return (
    <Row>
      <Col xxl={8} xl={6} className="box-col-12">
        <h6 className="mb-2">{SearchPixelStrap}</h6>
        {searchTabsData.map((item, i) => (
          <InformationCommon item={item} key={i} />
        ))}
      </Col>
      <SearchBanner />
      <PagesSort />
    </Row>
  );
};
export default AllTabs;
