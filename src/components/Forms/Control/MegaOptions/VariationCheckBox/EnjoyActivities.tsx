import { activitiesNameData } from "Data/Forms/Control";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { WhichActivitiesDoYouEnjoy } from "utils/Constant";

const EnjoyActivities = () => {
  return (
    <Col xl={4} md={5}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{WhichActivitiesDoYouEnjoy}</h6>
        {activitiesNameData.map((data, index) => (
          <div className="payment-wrapper" key={index}>
            <div className="payment-first">
              <FormGroup check className={`checkbox checkbox-${data.className}`}>
                <Input id={`check-${index}`} type="checkbox"/>
                <Label className="form-check-label mb-0" htmlFor={`check-${index}`}>{data.name}</Label>
              </FormGroup>
            </div>
          </div>
        ))}
      </div>
    </Col>
  );
};

export default EnjoyActivities;
