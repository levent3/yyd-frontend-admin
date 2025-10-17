import CardHead from "CommonElements/CardHead";
import { basicTypeAheadData } from "Data/Forms/Widget";
import { statesOfUSA } from "Data/Forms/Widget/TypeAheadData";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, Col, CardBody } from "reactstrap";
import { BasicTypeAheadHeading } from "utils/Constant";

const BasicTypeAhead = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CardHead title={BasicTypeAheadHeading} subTitle={basicTypeAheadData} />
        <CardBody>
          <div id="the-basics">
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

export default BasicTypeAhead;
