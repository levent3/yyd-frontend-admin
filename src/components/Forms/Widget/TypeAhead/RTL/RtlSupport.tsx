import CardHead from "CommonElements/CardHead";
import { RTLDropDownData } from "Data/Forms/Widget";
import { countryList } from "Data/Forms/Widget/TypeAheadData";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";
import { RTLSupport } from "utils/Constant";

const RtlSupport = () => {
  return (
    <Col sm="12" md="6">
      <Card>
      <CardHead title={RTLSupport} subTitle={RTLDropDownData}/>
        <CardBody>
          <div id="scrollable-dropdown-menu">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead align="right" options={countryList} placeholder="Countries" id="RTL Support" />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RtlSupport;
