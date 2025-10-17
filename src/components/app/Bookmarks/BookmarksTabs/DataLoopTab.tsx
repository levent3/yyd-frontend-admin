import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { CreatedByMe } from "utils/Constant";
import ViewBookmark from "../ViewBookmarks";
import DataLoop from "./DataLoop";
import { useContext } from "react";
import BookMarkContext from "helper/Bookmark";
const DataLoopTab = () => {
  const { gridView } = useContext(BookMarkContext);
  return (
    <TabPane tabId="1">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h6 className="mb-0">{CreatedByMe}</h6>
          <ViewBookmark />
        </CardHeader>
        <CardBody className="pb-0">
          <div
            className={`details-bookmark text-center ${
              gridView ? "" : "list-bookmark"
            }`}
          >
            <DataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default DataLoopTab;
