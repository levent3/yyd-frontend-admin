import { multipleWithHeadersData } from "Data/Forms/Widget/TypeAheadData";
import { Typeahead, Menu, MenuItem } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form } from "reactstrap";
import CardHead from "../../../../../../CommonElements/CardHead";
import { multipleSelectionData } from "Data/Forms/Widget";
import { MultipleSectionWithHeader } from "utils/Constant";

const MultipleSectionsWithHeaders = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CardHead
          title={MultipleSectionWithHeader}
          subTitle={multipleSelectionData}
        />
        <CardBody>
          <div id="multiple-datasets">
            <Form className="theme-form">
              <div className="w-50">
                <Typeahead
                  id="multiple-typeahead"
                  labelKey={"name"}
                  multiple
                  options={multipleWithHeadersData}
                  placeholder="Choose a state..."
                />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultipleSectionsWithHeaders;
