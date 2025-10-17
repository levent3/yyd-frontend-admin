import CardHead from "CommonElements/CardHead";
import { preFetchHeadingData } from "Data/Forms/Widget";
import { countryList } from "Data/Forms/Widget/TypeAheadData";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col } from "reactstrap";
import { PreFetchHeading } from "utils/Constant";

const PreFetch = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CardHead title={PreFetchHeading} subTitle={preFetchHeadingData} />
        <CardBody>
          <div id="prefetch">
            <form className="theme-form main-typeahead">
              <div>
                <Typeahead options={countryList} placeholder="Countries" />
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PreFetch;
