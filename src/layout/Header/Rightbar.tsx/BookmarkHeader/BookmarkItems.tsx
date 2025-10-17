import layoutContext from "helper/Layout";
import React, { useContext } from "react";
import { FileText } from "react-feather";
import { Col, Row } from "reactstrap";
import {
  AddNewBookmark,
  Bookmark,
  Forms,
  Href,
  Profile,
  Tables,
} from "utils/Constant";

const BookmarkItems = () => {
  const { bookMarkClass, setBookMarkClass } = useContext(layoutContext);
  return (
    <div className="front">
      <h6 className="f-18 mb-0 dropdown-title">{Bookmark}</h6>
      <ul className="bookmark-dropdown">
        <li>
          <Row>
            <Col xs={4} className="text-center">
              <div className="bookmark-content">
                <div className="bookmark-icon">
                  <FileText />
                </div>
                <span>{Forms}</span>
              </div>
            </Col>
            <Col xs={4} className="text-center">
              <div className="bookmark-content">
                <div className="bookmark-icon">
                  <i data-feather="user" />
                </div>
                <span>{Profile}</span>
              </div>
            </Col>
            <Col xs={4} className="text-center">
              <div className="bookmark-content">
                <div className="bookmark-icon">
                  <i data-feather="server" />
                </div>
                <span>{Tables}</span>
              </div>
            </Col>
          </Row>
        </li>
        <li className="text-center">
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
  );
};

export default BookmarkItems;
