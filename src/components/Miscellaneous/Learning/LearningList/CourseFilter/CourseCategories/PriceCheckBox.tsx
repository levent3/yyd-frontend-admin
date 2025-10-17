import { priceCheckBoxData } from "Data/Learning";
import { Input, Label } from "reactstrap";
import { Price } from "utils/Constant";

const PriceCheckBox = () => {
  return (
    <div className="checkbox-animated mt-0">
      <div className="learning-header">
        <span className="f-w-600">{Price}</span>
      </div>
      {priceCheckBoxData.map((data, index) => (
        <Label key={index} className="d-block" htmlFor={`Price-${index}`}>
          <Input className="radio_animated" id={`Price-${index}`} type="radio" name="rdo-ani" defaultChecked/>
          {data}
        </Label>
      ))}
    </div>
  );
};

export default PriceCheckBox;
