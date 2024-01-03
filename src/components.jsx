import React, {useState, useEffect} from "react";


export const CountDown = () => {
    const countdownTimes = [240, 100, 200, 150, 250, 60, 350, 75, 30];

const [seconds, setSeconds] = useState(
    countdownTimes[Math.floor(Math.random() * countdownTimes.length)],
  );
  //let timeIndex = Math.floor(Math.random() * countdownTimes.length);
  //let countdown = countdownTimes[timeIndex];

  useEffect(() => {
    seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
  }, [seconds]);

  return (
    <h3>{seconds}</h3>
  )
}

