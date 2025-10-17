import { Input, Label } from "reactstrap";
import { Flip } from "utils/Constant";

const FlipSwitch = () => {
  return (
    <>
      <li className="tg-list-item">
        <Input className="tgl tgl-flip" id="cb5" type="checkbox" />
        <Label
          className="tgl-btn"
          data-tg-off="Nope"
          data-tg-on="Yeah!"
          htmlFor="cb5"
        />
      </li>
      <li>
        <p>{Flip}</p>
      </li>
    </>
  );
};

export default FlipSwitch;
