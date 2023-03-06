import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTime = () => {
    const dday = 1681792200000;
    const currentTime = Date.now();

    if (dday - currentTime < 0) return;

    const time = new Date(dday - currentTime);

    let days = (dday - currentTime) / (1000 * 60 * 60 * 24);

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    setDays(Math.floor(days));
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTime();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div class="container !z-0 text-4xl py-10 ">
        <div class="container-segment  ">

          <div class="flip-card" data-days-tens>
            <div class="top">{days > 9 ? days : `0${days}`}</div>
            <div class="bottom">{days > 9 ? days : `0${days}`}</div>
          </div>
          <div class="segment-title">Days</div>
        </div>
        <div class="container-segment ">

          <div class="flip-card" data-hours-tens>
            <div class="top">{hours > 9 ? hours : `0${hours}`}</div>
            <div class="bottom">{hours > 9 ? hours : `0${hours}`}</div>
          </div>
          <div class="segment-title">Hours</div>
        </div>
        <div class="container-segment ">

          <div class="flip-card" data-minutes-tens>
            <div class="top">{minutes > 9 ? minutes : `0${minutes}`}</div>
            <div class="bottom">{minutes > 9 ? minutes : `0${minutes}`}</div>
          </div>
          <div class="segment-title">Minutes</div>
        </div>
        <div class="container-segment ">

          <div class="flip-card" data-seconds-tens>
            <div class="top">{seconds > 9 ? seconds : `0${seconds}`}</div>
            <div class="bottom">{seconds > 9 ? seconds : `0${seconds}`}</div>
          </div>
          <div class="segment-title">Seconds</div>
        </div>
      </div>
    </>
  );
};

export default CountDown;
