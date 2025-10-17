import { TabContent, TabPane } from "reactstrap";
import AllTabs from "./AllTabs";
import PhotosTab from "./PhotosTab";
import VideoTabs from "./VideoTabs";
interface propsType {
  activeTab: number;
}
const SearchTabContent = ({ activeTab }: propsType) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1} className="search-links">
        <AllTabs />
      </TabPane>
      <TabPane tabId={2}><PhotosTab /></TabPane>
      <TabPane tabId={3}><VideoTabs /></TabPane>
    </TabContent>
  );
};

export default SearchTabContent;
