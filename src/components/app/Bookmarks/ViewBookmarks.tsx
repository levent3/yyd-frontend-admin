import BookMarkContext from "helper/Bookmark";
import { useContext } from "react";
import { Grid, List } from "react-feather";
import { Href } from "utils/Constant";

const ViewBookmark = () => {
  const { setGridView } = useContext(BookMarkContext);
  return (
    <ul>
      <li>
        <a className="grid-bookmark-view" href={Href}><Grid onClick={() => setGridView(true)} /></a>
      </li>
      &nbsp;
      <li>
        <a className="list-layout-view" href={Href}><List onClick={() => setGridView(false)} /></a>
      </li>
    </ul>
  );
};
export default ViewBookmark;
