import { useContext, useState } from "react";
import { Button, Nav, NavItem } from "reactstrap";
import { Bookmark, PlusCircle } from "react-feather";
import { Href, NewBookmark, Tags, Views } from "utils/Constant";
import ModalTag from "./ModalTag";
import BookmarkModal from "./ModalBookMark";
import { sideBarData, sideBarData2 } from "Data/Bookmark";
import BookMarkContext from "helper/Bookmark";

const NavTab = () => {
  const { activeTab, setActiveTab } = useContext(BookMarkContext)
  const [addModal, setaddModal] = useState(false);
  const [tagModal, setTagModal] = useState(false);

  const tagToggle = () => { setTagModal(!tagModal); };
  const addToggle = () => { setaddModal(!addModal); };
  return (
    <Nav className="main-menu" role="tablist">
      <NavItem>
        <Button color="deafult" className="badge-light-primary d-block w-100 btn-mail btn-block" type="button" onClick={addToggle}>
          <Bookmark className="me-2" />
          {NewBookmark}
          <BookmarkModal value={addModal} addToggle={addToggle} />
        </Button>
      </NavItem>
      <NavItem><span className="main-title"> {Views}</span></NavItem>
      {sideBarData.map((data, index) => (
        <NavItem key={index}>
          <a className={`show ${activeTab === data.value ? "active" : ""}`} onClick={() => setActiveTab(data.value)} href={Href}>
            <span className="title"> {data.tittle}</span>
          </a>
        </NavItem>
      ))}
      <NavItem><hr /></NavItem>
      <NavItem>
        <span className="main-title">
          {Tags}
          <span className="pull-right">
            <a href={Href} onClick={tagToggle}>
              <PlusCircle />
            </a>
          </span>
        </span>
      </NavItem>
      <ModalTag value={tagModal} tagToggle={tagToggle} />
      {sideBarData2.map((data, index) => (
        <NavItem key={index}>
          <a className={`show ${activeTab === data.value ? "active" : ""}`} onClick={() => setActiveTab(data.value)} href={Href}>
            <span className="title"> {data.tittle}</span>
          </a>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavTab;