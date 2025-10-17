import SvgIcon from "CommonElements/Icons/SvgIcon";
import layoutContext from "helper/Layout";
import { useContext } from "react";

const Searchbar = () => {
  const { searchIcon, setSearchIcon } = useContext(layoutContext);

  return (
    <li>
      <span className="header-search">
        <SvgIcon iconId="search" onClick={() => {setSearchIcon(!searchIcon)}}/>
      </span>
    </li>
  );
};

export default Searchbar;
