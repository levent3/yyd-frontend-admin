import ConfigDB from "config/ThemeConfig";
import CustomizerContext from "helper/Customizer";
import React, { useContext, useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import { Apply, UnlimitedColor } from "utils/Constant";

const ColorComponent = () => {
  const { addColor } = useContext(CustomizerContext);
  const default_color = ConfigDB.data.color.primary_color;
  const secondary_color = ConfigDB.data.color.secondary_color;
  const [colorBackground1, setColorBackground1] = useState(default_color);
  const [colorBackground2, setColorBackground2] = useState(secondary_color);

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", colorBackground1);
    document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
    ConfigDB.data.color.primary_color = colorBackground1;
    ConfigDB.data.color.secondary_color = colorBackground2;
  }, [setColorBackground1, setColorBackground2, colorBackground1, colorBackground2]);

  const handleUnlimatedColor1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setColorBackground1(value);
    ConfigDB.data.color.primary_color = value;
  };
  const handleUnlimatedColor2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setColorBackground2(value);
    ConfigDB.data.color.secondary_color = value;
  };
  const OnUnlimatedColorClick = () => {
    ConfigDB.data.color.primary_color = colorBackground1;
    ConfigDB.data.color.secondary_color = colorBackground2;
    addColor(colorBackground1, colorBackground2);
    document.documentElement.style.setProperty("--theme-deafult", colorBackground1);
    document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
  };

  return (
    <>
      <h6>{UnlimitedColor}</h6>
      <ul className="simple-list flex-row layout-grid unlimited-color-layout">
        <Input className="p-0" type="color" name="Color-Background1" value={colorBackground1} onChange={(e) => handleUnlimatedColor1Change(e)} />
        <Input className="p-0" type="color" name="Color-Background2" value={colorBackground2} onChange={(e) => handleUnlimatedColor2Change(e)} />
        <Button
          color="primary"
          className="color-apply-btn color-apply-btn"
          onClick={OnUnlimatedColorClick}>
          {Apply}
        </Button>
      </ul>
    </>
  );
};

export default ColorComponent;
