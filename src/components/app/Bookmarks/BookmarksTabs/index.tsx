import { TabContent } from "reactstrap";
import DataLoopTab from "./DataLoopTab";
import FavDataTab from "./FavDataTab";
import EditBookmarkModal from "../EditBookmark";
import MyBookmarkTab from "./MyBookmarkTab";
import CommonTabCard from "./CommonTabCard";
import { Business, Holidays, Important, Newsletter, Notification, Orgenization, SharedWithMe} from "utils/Constant";
import { useContext } from "react";
import BookMarkContext from "helper/Bookmark";

const BookmarksTabs = () => {
  const {activeTab} =useContext(BookMarkContext)


  return (
    <TabContent activeTab={activeTab}>
      <DataLoopTab />
      <FavDataTab />
      <CommonTabCard tabId="3" tittle={SharedWithMe} />
      <MyBookmarkTab />
      <CommonTabCard tabId="5" tittle={Notification} />
      <CommonTabCard tabId="6" tittle={Newsletter} />
      <CommonTabCard tabId="7" tittle={Business} />
      <CommonTabCard tabId="8" tittle={Holidays} />
      <CommonTabCard tabId="9" tittle={Important} />
      <CommonTabCard tabId="10" tittle={Orgenization} />
      <EditBookmarkModal />
    </TabContent>
  );
};

export default BookmarksTabs;