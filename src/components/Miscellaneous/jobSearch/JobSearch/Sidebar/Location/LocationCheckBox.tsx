import { locationCheckBoxData } from "Data/jobs";
import { Input, Label } from "reactstrap";

const LocationCheckBox = () => {
  return (
    <div className="location-checkbox">
      {locationCheckBoxData.map((data, index) => (
        <Label className="d-block" for={`checkbox-${index}`} key={index}>
          <Input className="checkbox_animated" id={`checkbox-${index}`} type="checkbox" />
          {data.location}
          <span className="d-block">{data.locationSpanText}</span>
        </Label>
      ))}
    </div>
  );
};

export default LocationCheckBox;
