import { checkBoxData } from "Data/jobs";
import { Input, Label } from "reactstrap";

const FilterCheckBox = () => {
  return (
    <div className="checkbox-animated">
      {checkBoxData.map((data, index) => (
        <Label className="d-block" for={`chk-ani-${index}`} key={index}>
          <Input
            className="checkbox_animated"
            id={`chk-ani-${index}`}
            type="checkbox"
          />
          {data.inputTittle} {data.inputNumber}
        </Label>
      ))}
    </div>
  );
};

export default FilterCheckBox;
