import { commonButtonsToolTip } from "Types/ButtonsType";
import { useState } from "react";
import { Tooltip } from "reactstrap";

const CommonButtonsToolTip = ({ id, toolTipText }: commonButtonsToolTip) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Tooltip isOpen={tooltipOpen} target={id} toggle={toggle}>
      {toolTipText}
    </Tooltip>
  );
};

export default CommonButtonsToolTip;
