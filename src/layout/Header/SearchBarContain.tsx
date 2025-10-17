import SvgIcon from "CommonElements/Icons/SvgIcon";
import { searchBarContainPropsType } from "Types/LayoutDataType";
import layoutContext from "helper/Layout";
import Link from "next/link";
import { useContext } from "react";
import { X } from "react-feather";
import { Form, Input } from "reactstrap";
import { Emptysearch, Loading } from "utils/Constant";

const SearchBarContain = ({
  handleSearch,
  suggestion,
  searchValue,
  setSearchValue,
  fieldTouch,
}: searchBarContainPropsType) => {
  const { searchIcon, setSearchIcon } = useContext(layoutContext);

  const handleOnClick = () => {
    document.body.classList.remove("offcanvas");
    setSearchValue("");
  };
  return (
    <Form className={`form-inline search-full col ${searchIcon ? "open" : ""}`}>
      <div className="form-group w-100">
        <div className="Typeahead Typeahead--twitterUsers">
          <div className="u-posRelative">
            <Input
              onChange={handleSearch}
              value={searchValue}
              className="Typeahead-input form-control-plaintext w-100"
              placeholder="Ara..."
            />
            <div className="spinner-border Typeahead-spinner">
              <span className="sr-only">{Loading}</span>
            </div>
            <X
              onClick={() => setSearchIcon(!searchIcon)}
              className="close-search"
            />
          </div>
          <div className="Typeahead-menu is-open" id="search-outer">
            <div className="header-search-suggestion custom-scrollbar">
              {suggestion.map((item, i) => (
                <div className="ProfileCard u-cf" key={i}>
                  <div className="ProfileCard-details">
                    <div className="ProfileCard-realName">
                      <Link
                        onClick={handleOnClick}
                        className="realname  w-100 d-flex justify-content-start gap-2"
                        href={item.path}
                      >
                        <SvgIcon
                          className="stroke-icon"
                          iconId={`stroke-${item.icon}`}
                        />
                        {item.title}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`Typeahead-menu empty-menu ${
              suggestion.length == 0 && fieldTouch ? "is-open" : ""
            } `}
          >
            <div className="tt-dataset tt-dataset-0">
              <div className="EmptyMessage">{Emptysearch}</div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default SearchBarContain;
