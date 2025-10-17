import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { Favourites } from "utils/Constant";
import ViewBookmark from "../ViewBookmarks";
import FavDataLoop from "./FavDataLoop";
import { useContext } from "react";
import BookMarkContext from "helper/Bookmark";

const FavDataTab = () => {
  const { gridView } = useContext(BookMarkContext);
  return (
    <TabPane tabId="2">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h6 className="mb-0">{Favourites}</h6>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div
            className={`details-bookmark text-center ${
              gridView ? "" : "list-bookmark"
            }`}
          >
            <FavDataLoop />
          </div>
        </CardBody>
      </Card>$dark-color
    </TabPane>
  );
};

export default FavDataTab;
