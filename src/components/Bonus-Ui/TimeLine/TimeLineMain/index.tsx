import CardHead from "CommonElements/CardHead";
import {
  TimeLineData1,
  TimeLineData2,
  TimeLineData3,
  TimeLineData4,
  TimeLineData5,
  TimeLineData6,
} from "Data/Bonus-Ui/TimeLineData";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Card, CardBody, Col } from "reactstrap";

const TimeLineMain = () => {
  return (
    <Col sm={12} className="box-col-12">
      <Card>
        <CardHead
          title="Timeline"
          subTitle={[{ text: "This is a cuba timeline chart." }]}
        />
        <CardBody>
          <VerticalTimeline className="cd-container">
            <VerticalTimelineElement
              className="cd-timeline-block"
              date="February 02 2022"
              icon={
                <div className="cd-timeline-img cd-picture bg-primary">
                  <i className="icon-pencil-alt" />
                </div>
              }
            >
              {TimeLineData1}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="cd-timeline-block"
              date="March 12 2022"
              icon={
                <div className="cd-timeline-img bg-danger">
                  <i className="icon-youtube" />
                </div>
              }
            >
              {TimeLineData2}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="cd-timeline-block"
              date="April 23 2022"
              icon={
                <div className="cd-timeline-img bg-success">
                  <i className="icon-image" />
                </div>
              }
            >
              {TimeLineData3}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="cd-timeline-block"
              date="June 12 2022"
              icon={
                <div className="cd-timeline-img cd-location bg-info">
                  <i className="icon-pulse" />
                </div>
              }
            >
              {TimeLineData4}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="cd-timeline-block"
              date="November 04 2022"
              icon={
                <div className="cd-timeline-img cd-location bg-secondary">
                  <i className="icon-pin-alt" />
                </div>
              }
            >
              {TimeLineData5}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="cd-timeline-block"
              date="December 31 2022"
              icon={
                <div className="cd-timeline-img cd-movie bg-danger">
                  <i className="icon-agenda" />
                </div>
              }
            >
              {TimeLineData6}
            </VerticalTimelineElement>
          </VerticalTimeline>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TimeLineMain;
