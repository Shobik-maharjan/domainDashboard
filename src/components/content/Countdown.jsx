import React, { useEffect, useState } from "react";
import {
  BsFillPlayFill,
  BsPauseFill,
  BsStopFill,
  BsStopwatch,
} from "react-icons/bs";

import "./countdown.scss";

const Countdown = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  const [targetTime, setTargetTime] = useState(null);
  //end of time
  const [showEndScreen, setShowEndScreen] = useState({
    show: false,
    message: "Happy coding",
  });
  useEffect(() => {
    let interval;

    // if (isRunning) {
    //   interval = setInterval(() => {
    //     if (milliseconds > 0) {
    //       setMilliseconds((milliseconds) => milliseconds - 1);
    //     } else if (seconds > 0) {
    //       setSeconds((seconds) => seconds - 1);
    //       setMilliseconds(99);
    //     } else if (minutes > 0) {
    //       setMinutes((minutes) => minutes - 1);
    //       setSeconds(59);
    //       setMilliseconds(99);
    //     } else if (hours > 0) {
    //       setHours((hours) => hours - 1);
    //       setMinutes(59);
    //       setSeconds(59);
    //       setMilliseconds(99);
    //     }
    //   }, 10);
    // }
    // if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds <= 0) {
    //   setShowEndScreen({ ...showEndScreen, show: true });
    //   resetTimer();
    // }

    // if (isRunning) {
    //   const totalMilliseconds =
    //     hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;

    //   interval = setInterval(() => {
    //     if (totalMilliseconds > 0) {
    //       const updatedMilliseconds = totalMilliseconds - 10;
    //       setHours(Math.floor(updatedMilliseconds / 3600000));
    //       setMinutes(Math.floor((updatedMilliseconds % 3600000) / 60000));
    //       setSeconds(Math.floor((updatedMilliseconds % 60000) / 1000));
    //       setMilliseconds(updatedMilliseconds % 1000);
    //     } else {
    //       // Timer has reached 0
    //       clearInterval(interval);
    //       setShowEndScreen({ ...showEndScreen, show: true });
    //       resetTimer();
    //     }
    //   }, 10);
    // }

    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const remainingTime = Math.max(0, targetTime - currentTime);

      if (remainingTime > 0) {
        const remainingSeconds = Math.floor(remainingTime / 1000);
        const remainingMilliseconds = remainingTime % 1000;

        setMilliseconds(remainingMilliseconds);
        setSeconds(remainingSeconds % 60);
        setMinutes(Math.floor(remainingSeconds / 60) % 60);
        setHours(Math.floor(remainingSeconds / 3600));
      } else {
        clearInterval(interval);
        setShowEndScreen({ ...showEndScreen, show: true });
        resetTimer();
      }
    };

    if (isRunning) {
      interval = setInterval(updateTimer, 10);
    }
    return () => clearInterval(interval);
  }, [
    milliseconds,
    seconds,
    minutes,
    hours,
    isRunning,
    targetTime,
    showEndScreen.show,
  ]);

  // start

  function startTimer() {
    const totalMilliseconds =
      hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;

    if (totalMilliseconds > 0) {
      const currentTime = new Date().getTime();
      setTargetTime(currentTime + totalMilliseconds);
      setIsRunning(true);
      setShowEndScreen({ ...showEndScreen, show: false });
    } else {
      window.alert("Please add time.");
    }
  }

  // pause timer
  function pauseTimer() {
    setIsRunning(false);
  }

  function stopTimer() {
    resetTimer();
    setShowEndScreen({ ...showEndScreen, show: false });
  }

  function resetTimer() {
    setIsRunning(false);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  // Handlers
  const changeTime = (value, max) => {
    let newValue = parseInt(value, 10);
    if (isNaN(newValue) || newValue < 0) {
      newValue = 0;
    }
    return newValue > max ? max : newValue;
  };

  const changeHours = (e) => {
    setHours(changeTime(e.target.value, 24));
  };

  const changeMinutes = (e) => {
    setMinutes(changeTime(e.target.value, 59));
  };

  const changeSeconds = (e) => {
    setSeconds(changeTime(e.target.value, 59));
  };

  return (
    <>
      <div className="countdown-container">
        {showEndScreen.show && (
          <h1 className="title">{showEndScreen.message} </h1>
        )}
        <div className="timerWrapper">
          <BsStopwatch className="stop-watch" />
          <div>
            <label htmlFor="hours">hh</label>
            <input id="hours" value={hours} onChange={changeHours} />
          </div>
          <div>
            <label htmlFor="minutes">mm</label>
            <input
              id="minutes"
              value={minutes}
              onChange={changeMinutes}
              maxLength={2}
            />
          </div>
          <div>
            <label htmlFor="seconds">ss</label>
            <input
              id="seconds"
              value={seconds}
              onChange={changeSeconds}
              maxLength={2}
            />
          </div>
          <div>
            <label htmlFor="milliseconds">ms</label>
            <input id="milliseconds" value={milliseconds} readOnly />
          </div>

          <br />
          <br />
          {!isRunning && (
            <button onClick={startTimer}>
              <BsFillPlayFill />
            </button>
          )}
          {isRunning && (
            <button onClick={pauseTimer}>
              <BsPauseFill />
            </button>
          )}
          {isRunning && (
            <button onClick={stopTimer}>
              <BsStopFill />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Countdown;
