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

  //end of time
  const [showEndScreen, setShowEndScreen] = useState({
    show: false,
    message: "Happy coding",
  });
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((milliseconds) => milliseconds - 1);
        } else if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
          setMilliseconds(99);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
          setMilliseconds(99);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
          setMilliseconds(99);
        }
      }, 10);
    }
    if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 1) {
      setShowEndScreen({ ...showEndScreen, show: true });
      resetTimer();
    }

    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, hours, isRunning, showEndScreen.show]);

  // start
  function startTimer() {
    if (hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
      setIsRunning(true);
      setShowEndScreen({ ...showEndScreen, show: false });
    } else {
      window.alert("add time.");
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
  const changeSeconds = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) value = 0;
    setSeconds(value > 60 ? 60 : value);
  };
  const changeMinutes = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) value = 0;
    setMinutes(value > 60 ? 60 : value);
  };
  const changeHours = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 0) value = 0;
    setHours(value > 24 ? 24 : value);
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
