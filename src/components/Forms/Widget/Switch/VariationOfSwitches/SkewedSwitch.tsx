import { Input, Label } from "reactstrap";
import { Skewed } from "utils/Constant";

const SkewedSwitch = () => {
  return (
    <>
      <li className="tg-list-item">
        <Input className="tgl tgl-skewed" id="cb3" type="checkbox" />
        <Label
          className="tgl-btn"
          data-tg-off="OFF"
          data-tg-on="ON"
          htmlFor="cb3"
        />
      </li>
      <li>
        <p>{Skewed}</p>
      </li>
    </>
  );
};

export default SkewedSwitch;
