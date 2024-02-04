"use client";
import React, { useState, useEffect } from 'react';

const CountDownTimer = () => {
  const [time, setTime] = useState({ minutes: 2, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (time.minutes === 0 && time.seconds === 0) {
        clearInterval(interval);

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
  }, [time]);

  return (
    <div >
      {`${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`}
    </div>
  );
};

export default CountDownTimer;
