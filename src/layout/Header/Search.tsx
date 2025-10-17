import { ChangeEvent, useState } from "react";
import SearchBarContain from "./SearchBarContain";
import { useContext } from "react";
import layoutContext, { searchableMenuType } from "helper/Layout";

const Search = () => {
  const [suggestion, setSuggestion] = useState<searchableMenuType[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [fieldTouch, setFieldTouch] = useState(false);
  const { searchableMenu } = useContext(layoutContext);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchKey = event.target.value.toLowerCase();
    setFieldTouch(true)
    setSearchValue(event.target.value)
    if (searchKey !== "") {
      document.body.classList.add("offcanvas");
      const search = searchableMenu.filter((item) => {
        return item.title.toLowerCase().includes(searchKey);
      });
      setSuggestion(search);
    }
    if (searchKey === "") {
      document.body.classList.remove("offcanvas");
      setSuggestion([]);
    }
  };
  return (
    <SearchBarContain handleSearch={handleSearch} suggestion={suggestion} searchValue={searchValue} setSearchValue={setSearchValue} fieldTouch={fieldTouch} setFieldTouch={setFieldTouch}  />
  );
};

export default Search;
