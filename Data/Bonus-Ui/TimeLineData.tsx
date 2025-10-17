import { BasicTimelineType } from "Types/BonusUiType";
import Slider from "react-slick";
import banner1 from "/public/assets/images/banner/1.jpg";
import banner2 from "/public/assets/images/banner/2.jpg";
import banner3 from "/public/assets/images/banner/3.jpg";
import Image from "next/image";

export const BasicTimeLineData: BasicTimelineType[] = [
  {
    class: "timeline-dot-primary",
    date: "2 Feb 2023",
    time: "7:00 AM",
    title: "CONFERENCE WITH CLIENT",
    text: "At noon today, there will be a meeting with a UK client.",
  },
  {
    class: "timeline-dot-secondary",
    date: "22 March 2023",
    time: "3:45 PM",
    title: "DISCUSSION WITH MARKETING TEAM",
    text: "discussion with the marketing staff on the success of the most recent project",
  },
  {
    class: "timeline-dot-success",
    date: "16 May 2023",
    time: "1:22 AM",
    title: "INVEST IN A NEW HOSTING PLAN",
    text: "today at 2 pm AM, purchase a new hosting package as agreed upon with the management team.",
  },
  {
    class: "timeline-dot-warning",
    date: "23 Nov 2023",
    time: "6:56 AM",
    title: "DISCUSSION WITH DESIGNER TEAM",
    text: "discussion with the designer employee on the success of the most recent project.",
  },
  {
    class: "timeline-dot-info",
    date: "12 Dec 2023",
    time: "12:05 AM",
    title: "DISCUSSION WITH NEW THEME LAUNCH ",
    text: "discussion with the how many themes made in our portfolio.",
  },
  {
    class: "timeline-dot-danger",
    date: "02 Jan 2024",
    time: "6:56 AM",
    title: "PURCHASE NEW CHAIRS FOR OFFICE ",
    text: "online purchase new chairs for office",
  },
];

export const TimeLineData1: string | JSX.Element = (
  <div className="cd-timeline-content">
    <div className="timeline-wrapper">
      <div className="badge bg-warning">app-ideas</div>
    </div>
    <h5 className="m-0">Established new the app-ideas repository.</h5>
    <p className="m-0">
      developers who are just beginning their learning process. those who often
      concentrate on developing programmes with a user interface.
    </p>
    <div className="time-content pt-2">
      <i className="icon-github" />
      <h6>View it on Github</h6>
    </div>
  </div>
);

export const TimeLineData2: string | JSX.Element = (
  <div className="cd-timeline-content">
    <div className="timeline-wrapper">
      <div className="badge bg-danger">Blog</div>
    </div>
    <h5 className="m-0">Implemented the program for weekly code challenges.</h5>
    <p className="m-0">
      Challenges{" "}
      <em className="txt-danger">
        help you build problem-solving skills, better understand the
        programming.{" "}
      </em>
      If you want to improve your skills in programming.{" "}
    </p>
    <div className="ratio ratio-21x9 m-t-20">
      <iframe src="https://www.youtube.com/embed/sqRk0Ly66Ps" allowFullScreen />
    </div>
  </div>
);

const setting = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export const TimeLineData3: string | JSX.Element = (
  <div className="cd-timeline-content">
    <div className="timeline-wrapper">
      <div className="badge bg-info">Designer</div>
    </div>
    <h5 className="m-0">Research about most recent design trends.</h5>
    <p className="m-0">Spend some time looking up current design trend.</p>
    <Slider {...setting}>
      <div>
        <Image
          className="d-block w-100"
          src={banner1}
          alt="office-work"
          height={100}
        />
      </div>
      <div>
        <Image
          className="d-block w-100"
          src={banner2}
          alt="office-work"
          height={100}
        />
      </div>
      <div>
        <Image
          className="d-block w-100"
          src={banner3}
          alt="office-work"
          height={100}
        />
      </div>
    </Slider>
  </div>
);

export const TimeLineData4: string | JSX.Element = (
  <div className="cd-timeline-content">
    <div className="timeline-wrapper">
      <div className="badge bg-primary">Audio testing</div>
    </div>
    <h5 className="m-0">Musical trends and predictability</h5>
    <p className="m-0">
      {
        "So, the next time you listen to music, you might or might not consider how it's actively altering your mood."
      }
    </p>
    <audio controls>
      <source src="../assets/audio/horse.ogg" type="audio/ogg" />
    </audio>
  </div>
);

export const TimeLineData5: string | JSX.Element = (
  <div className="cd-timeline-content">
    <div className="timeline-wrapper">
      <div className="badge bg-success">Meet-up</div>
    </div>
    <h5 className="m-0">{"Web-designer's meet-up"}</h5>
    <p className="m-0">
      {" "}
      {
        "Find nearby web designers to network with! A Web Design Meetup is a place where you can discuss tools."
      }
    </p>
    <div className="time-content pt-2">
      <i className="icon-android" />
      <h6>Please! Meet-up</h6>
    </div>
  </div>
);

export const TimeLineData6: string | JSX.Element = (
  <div className="cd-timeline-content">
    <div className="timeline-wrapper">
      <div className="badge bg-warning">Resolutions</div>
    </div>
    <h5 className="m-0">My Resolutions for 2023</h5>
    <p className="m-0">
      {
        "I'm determined to streamline, organism, systematism, realign, and embrace life in 2023."
      }
    </p>
    <div className="time-content pt-2">
      <i className="icon-write" />
      <h6>My Resolutions </h6>
    </div>
  </div>
);
