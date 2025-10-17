import SvgIcon from "CommonElements/Icons/SvgIcon";
import { useState } from "react";

const MoonLight = () => {
  const [darkMode, setDarkMode] = useState(false);

  const DarkModeHandler = (name: boolean) => {
    if (name) {
      document.body.classList.remove("dark-only");
      document.body.classList.add("light-only");
      setDarkMode(!darkMode);
    } else {
      document.body.classList.remove("light-only");
      document.body.classList.add("dark-only");
      setDarkMode(!darkMode);
    }
  };

  return (
    <li>
      <div
        className={`mode ${darkMode ? "active" : ""}`}
        onClick={() => DarkModeHandler(darkMode)}
      >
        <SvgIcon iconId="moon" />
      </div>
    </li>
  );
};

export default MoonLight;