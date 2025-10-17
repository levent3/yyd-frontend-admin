import { categoriesCheckBoxData } from "Data/Learning";
import { Input, Label } from "reactstrap";
import { Categories } from "utils/Constant";

const CategoriesCheckBox = () => {
  return (
    <div className="checkbox-animated">
      <div className="learning-header">
        <span className="f-w-600">{Categories}</span>
      </div>
      {categoriesCheckBoxData.map((data, index) => (
        <Label key={index} className="d-block" htmlFor={`chk-ani-${index}`}>
          <Input className="checkbox_animated" id={`chk-ani-${index}`} type="checkbox" />
          {data}
        </Label>
      ))}
    </div>
  );
};

export default CategoriesCheckBox;
