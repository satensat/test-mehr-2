"use client";
import React, { useState, useEffect } from "react";

const CountDownTimer = ({ startTimer,setEnablePhoneSend }) => {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  useEffect(() => {
    if (startTimer) {
      setTime({ minutes: 2, seconds: 0 });
    }
  }, [startTimer]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (time.minutes === 0 && time.seconds === 0) {
        clearInterval(interval);
        setEnablePhoneSend(true);
      } else {
        setTime((prevTime) => {
          if (prevTime.seconds === 0) {
            return { minutes: prevTime.minutes - 1, seconds: 59 };
          } else {
            return { ...prevTime, seconds: prevTime.seconds - 1 };
          }
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time,setEnablePhoneSend]);

  return (
    <div>
      {`${String(time.minutes).padStart(2, "0")}:${String(
        time.seconds
      ).padStart(2, "0")}`}
    </div>
  );
};

export default CountDownTimer;
