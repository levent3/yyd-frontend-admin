import SvgIcon from "CommonElements/Icons/SvgIcon";
import { bookMarkContainPropsType } from "Types/LayoutDataType";
import layoutContext from "helper/Layout";
import Link from "next/link";
import { useContext } from "react";
import { Col, Input, Row } from "reactstrap";
import { AddNewBookmark, Back, Href } from "utils/Constant";

const BookMarkContain = ({
  handleSearch,
  searchedItems,
  handleBookmarkChange,
  searchWord,
}: bookMarkContainPropsType) => {
  const { bookmarkList, bookMarkClass, setBookMarkClass, searchableMenu } =
    useContext(layoutContext);

  return (
    <li className="onhover-dropdown">
      <SvgIcon iconId="star" />
      <div className="onhover-show-div bookmark-flip ">
        <div className="flip-card">
          <div className={`flip-card-inner ${bookMarkClass ? "flipped" : ""}`}>
            <div className="front">
              <h6 className="f-18 mb-0 dropdown-title">{"Bookmark"}</h6>
              <ul className="bookmark-dropdown">
                <li className="custom-scrollbar">
                  <Row className="g-2">
                    {bookmarkList.map((data, index) => (
                      <Col xs={4} className="text-center" key={index}>
                        <div className="bookmark-content">
                          <div className="bookmark-icon">
                            <SvgIcon
                              className="stroke-icon"
                              iconId={`stroke-${data.icon}`}
                            />
                          </div>
                          <Link href={data.path}>{data.title}</Link>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </li>
                <li className="text-center new-bookmark">
                  <a
                    onClick={() => setBookMarkClass(!bookMarkClass)}
                    className="flip-btn f-w-700"
                    id="flip-btn"
                    href={Href}
                  >
                    {AddNewBookmark}
                  </a>
                </li>
              </ul>
            </div>
            <div className="back">
              <ul>
                <li>
                  <div className="bookmark-dropdown flip-back-content">
                    <Input
                      type="text"
                      placeholder="search..."
                      onChange={handleSearch}
                    />
                    <div
                      className={`filled-bookmark Typeahead-menu  ${
                        searchWord ? "is-open" : ""
                      } custom-scrollbar `}
                    >
                      {searchedItems.map((item, i) => (
                        <div key={i} className="ProfileCard u-cf">
                          <div className="ProfileCard-avatar">
                            <SvgIcon
                              className="stroke-icon"
                              iconId={`stroke-${item.icon}`}
                            />
                          </div>
                          <div className="ProfileCard-details">
                            <div className="ProfileCard-realName">
                              <Link className="realname" href={item.path}>
                                {item.title}
                              </Link>
                              <span className="pull-right">
                                  <i
                                    onClick={() =>
                                      handleBookmarkChange(
                                        searchableMenu[item.id - 1]
                                      )
                                    }
                                    className={`fa fa-star-o mt-1 icon-star ${
                                      item.bookmarked ? "starred" : ""
                                    }`}
                                  ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`Typeahead-menu empty-bookmark ${
                        searchedItems.length <= 0 ? "is-open" : ""
                      }  `}
                    >
                      <div className="tt-dataset tt-dataset-0">
                        <div className="EmptyMessage">
                          Ops!! There are no result found.
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="new-bookmark">
                  <a
                    onClick={() => setBookMarkClass(!bookMarkClass)}
                    className="f-w-700 d-block flip-back"
                    id="flip-back"
                    href={Href}
                  >
                    {Back}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BookMarkContain;
