import { oscarWinnersMovieList } from "Data/Forms/Widget/TypeAheadData";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col } from "reactstrap";
import { CustomTemplate } from "utils/Constant";
import CardHead from "../../../../../../CommonElements/CardHead";
import { customTemplateData } from "Data/Forms/Widget";

const CustomTemplates = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CardHead title={CustomTemplate} subTitle={customTemplateData} />
        <CardBody>
          <div id="custom-templates">
            <form className="theme-form main-typeahead">
              <div>
                <Typeahead
                  options={oscarWinnersMovieList}
                  placeholder="Oscar winners"
                />
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomTemplates;
