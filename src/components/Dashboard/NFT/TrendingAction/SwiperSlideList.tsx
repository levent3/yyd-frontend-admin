import Countdown, { CountdownRenderProps } from "react-countdown";
import { AuctionTime, CurrentBid } from "utils/Constant";

const SwiperSlideList = () => {
  const Completionist = () => <span>{"You are good to go!"}</span>;

  const renderer = ({ hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <ul>
          <li>
            <span className="f-12 f-light">{AuctionTime}</span>
            <span className="d-block f-light f-w-500 timer">
              <span className="me-1">
                <span className="hours">{hours}</span> <span>h</span>
              </span>
              <span className="me-1">
                <span className="minutes">{minutes}</span> <span>m</span>
              </span>
              <span>
                <span className="seconds">{seconds}</span>
                <span>s</span>
              </span>
            </span>
          </li>
          <li>
            <span className="f-12 f-light">{CurrentBid}</span>
            <span className="d-block f-light f-w-500">0.15 ETH</span>
          </li>
        </ul>
      );
    }
  };

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var countDown = new Date(year, month, day + 365).getTime();

  return <Countdown date={countDown} renderer={renderer} />;
};

export default SwiperSlideList;
