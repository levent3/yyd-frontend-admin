import { variationBoxData } from "Data/Forms/Layout";
import { Input } from "reactstrap";

const VariationBox = () => {
  return (
    <div className="variation-box">
      {variationBoxData.map((data, index) => (
        <div className="selection-box" key={index}>
          <Input type="checkbox" />
          <div className="custom--mega-checkbox">
            <ul className="d-flex flex-column">
              <li>{data.tittle}</li>
              <li className="txt-primary">{data.details}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VariationBox;
