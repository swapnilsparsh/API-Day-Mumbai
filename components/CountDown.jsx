import Script from "next/script";
import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTime = () => {
    const dday = 1678818600000;
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
    <Script src="/countdownSrc.js" />
      <div className="container !z-0 text-4xl pb-10  ">
        <div className="container-segment">
          <div className="flip-card" data-days>
            <div className="top ">{days > 9 ? days : `0${days}`}</div>
            <div className="bottom ">{days > 9 ? days : `0${days}`}</div>
          </div>
          <div className="segment-title">Days</div>
        </div>
        <div className="container-segment ">

          <div className="flip-card" data-hours>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <div className="segment-title">Hours</div>
        </div>
        <div className="container-segment ">

          <div className="flip-card" data-minutes>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <div className="segment-title">Minutes</div>
        </div>
        <div className="container-segment ">

          <div className="flip-card" data-seconds>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <div className="segment-title">Seconds</div>
        </div>
      </div>

{/* <div class="container !z-0 text-4xl py-10">
    <div class="container-segment">
      <div class="segment-title">Hours</div>
      <div class="segment">
        <div class="flip-card" data-hours-tens>
          <div class="top">2</div>
          <div class="bottom">2</div>
        </div>
      </div>
    </div>
    <div class="container-segment">
      <div class="segment-title">Minutes</div>
      <div class="segment">
        <div class="flip-card" data-minutes-tens>
          <div class="top">0</div>
          <div class="bottom">0</div>
        </div>
      </div>
    </div>
    <div class="container-segment">
      <div class="segment-title">Seconds</div>
      <div class="segment">
        <div class="flip-card" data-seconds-tens>
          <div class="top">0</div>
          <div class="bottom">0</div>
        </div>
      </div>
    </div>
  </div> */}
    </>
  );
};

export default CountDown;
