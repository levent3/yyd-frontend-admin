import { FormGroup, Input, Label } from "reactstrap";
import { Audio, Image, Text, Type, Video } from "utils/Constant";

const RadioTypeForm = () => {
  let RadioData = [Text, Image, Audio, Video];
  return (
    <FormGroup>
      <Label>{Type}:</Label>
      <div className="m-checkbox-inline">
        {RadioData.map((data, index) => (
          <Label for={`edo-ani-${index}`} key={index}>
            <Input
              className="radio_animated"
              id={`edo-ani-${index}`}
              type="radio"
              name="rdo-ani"
            />
            {data}
          </Label>
        ))}
      </div>
    </FormGroup>
  );
};

export default RadioTypeForm;
