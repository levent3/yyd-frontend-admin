import  { useState } from "react";
import LanguageList from "./LanguageList";
import { countryClassName } from "Data/HeaderData";

const Language = () => {
  const [dropdownShow, setDropdownShow] = useState(false);
  const [selected, setSelected] = useState("en");

  const LanguageSelection = (dropdownShow: boolean) => {
    if (selected) {
      setDropdownShow(!dropdownShow);
    } else {
      setDropdownShow(!dropdownShow);
    }
  };
  return (
    <li className="language-nav">
      <div className={`translate_wrapper ${dropdownShow ? "active" : ""}`}>
        <div className="current_lang">
          <div className="lang" onClick={() => LanguageSelection(dropdownShow)}>
            <i
              className={`flag-icon flag-icon-${countryClassName[selected]}`}
            ></i>
            <span className="lang-txt">{countryClassName[selected]}</span>
          </div>
        </div>
        <LanguageList selected={selected} setSelected={setSelected} />
      </div>
    </li>
  );
};

export default Language;
