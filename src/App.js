import React, { useState, useEffect } from "react";
//import Countdown from 'react-countdown';
import "./App.css";

const emergencies = [
  {
    name: "Fire Emergency",
    message: "Put water on the fire",
  },
  {
    name: "Forest Fire Emergency",
    message: "Extinguish the forest fire",
  },
  {
    name: "Earthquake Emergency",
    message: "There's been an earthquake, call the police!'",
  },
];

const countdownTimes = [240, 100, 200, 150, 250, 60, 350, 75, 30];

const App = () => {
  let index = Math.floor(Math.random() * emergencies.length);
  let emergency = emergencies[index].name;

  const [seconds, setSeconds] = useState(
    countdownTimes[Math.floor(Math.random() * countdownTimes.length)],
  );
  //let timeIndex = Math.floor(Math.random() * countdownTimes.length);
  //let countdown = countdownTimes[timeIndex];

  useEffect(() => {
    seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
  }, [seconds]);

  return (
    <div>
      <h1>{emergency}</h1>
      <div>
        <h3>{seconds}</h3>
      </div>
    </div>
  );
};

export default App;
