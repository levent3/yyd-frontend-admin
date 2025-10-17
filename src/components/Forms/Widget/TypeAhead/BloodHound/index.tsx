import CardHead from "CommonElements/CardHead";
import { bloodhoundTypeAheadData } from "Data/Forms/Widget";
import { statesOfUSA } from "Data/Forms/Widget/TypeAheadData";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col } from "reactstrap";
import { BloodHoundHeading } from "utils/Constant";

const BloodHound = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CardHead title={BloodHoundHeading} subTitle={bloodhoundTypeAheadData} />
        <CardBody>
          <div id="bloodhound">
            <form className="theme-form main-typeahead">
              <div>
                <Typeahead options={statesOfUSA} placeholder="States of USA" />
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BloodHound;
