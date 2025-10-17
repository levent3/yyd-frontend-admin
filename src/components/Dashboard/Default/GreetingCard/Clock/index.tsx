import { useEffect, useState } from "react";

const ClockMain = () => {
  const [time, setTime] = useState(() => {
    var currentDate = new Date();
    return {
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds(),
    };
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const currenTimeObject = {
        hours: date.getHours(),
        minutes : date.getMinutes() < 10 ? Number("0" + date.getMinutes()) : date.getMinutes(),
        seconds: date.getSeconds(),
      };
      setTime(currenTimeObject);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className="clockbox">
        <svg
          id="clock"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 600"
        >
          <g id="face">
            <circle className="circle" cx={300} cy={300} r="253.9" />
            <path
              className="hour-marks"
              d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"
            />
            <circle className="mid-circle" cx={300} cy={300} r="16.2" />
          </g>
          <g id="hour" style={{
            transform: `rotate(${time.hours * 30 - 90}deg) translateX(-10px)`,
          }}>
            <path className="hour-hand" d="M300.5 298V142" />
            <circle className="sizing-box" cx={300} cy={300} r="253.9" />
          </g>
          <g id="minute" style={{
            transform: `rotate(${time.minutes * 6 - 90}deg) translateX(-15px)`,
          }}>
            <path className="minute-hand" d="M300.5 298V67">
            </path>
            <circle className="sizing-box" cx={300} cy={300} r="253.9" />
          </g>
          <g id="second" style={{
            transform: `rotate(${time.seconds * 6 - 90}deg) translateX(-15px)`,
          }}>
            <path className="second-hand" d="M300.5 350V55" />
            <circle className="sizing-box" cx={300} cy={300} r="253.9">
            </circle>
          </g>
        </svg>
      </div>
      <div className="badge f-10 p-0" id="txt">
        {time.hours}:{time.minutes} {time.hours >=12 ? "PM" : "AM"}
      </div>
    </div>
  );
};

export default ClockMain;
