import CardHead from "CommonElements/CardHead";
import { scrollableDropDownData } from "Data/Forms/Widget";
import { countryList } from "Data/Forms/Widget/TypeAheadData";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col } from "reactstrap";
import { ScrollableDropDownMenu } from "utils/Constant";

const ScrollableDropdownMenu = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CardHead
          title={ScrollableDropDownMenu}
          subTitle={scrollableDropDownData}
        />
        <CardBody>
          <div id="scrollable-dropdown-menu">
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

export default ScrollableDropdownMenu;
