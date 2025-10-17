import { useEffect, useState } from "react";
import { Col, Media, Row } from "reactstrap";
import { AllAbout, Href } from "utils/Constant";
import PagesSort from "./Pages";
import { searchTabsData } from "Data/SearchTabs";
import VideoTab1 from "./VideoTab1";
import VideoTab2 from "./VideoTab2";

const VideoTabs = () => {
  return (
    <Row>
      <VideoTab1 />
      <VideoTab2 />
    </Row>
  );
};
export default VideoTabs;
