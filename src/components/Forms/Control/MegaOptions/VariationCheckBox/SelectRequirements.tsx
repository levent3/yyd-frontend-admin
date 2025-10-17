import { Col } from "reactstrap";
import {BestSuitsYourRequirements,ItIsTimeTo,Sales,upgrade,} from "utils/Constant";
import VariationBox from "./VariationBox";

const SelectRequirements = () => {
  return (
    <Col xl={8} md={7}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <section className="main-upgrade">
          <div>
            <i className="fa fa-rocket" />
            <h5 className="mb-2">{ItIsTimeTo} <span className="txt-primary">{upgrade}</span></h5>
            <p className="text-muted mb-2">{BestSuitsYourRequirements}</p>
          </div>
          <VariationBox/>
        </section>
      </div>
    </Col>
  );
};

export default SelectRequirements;
