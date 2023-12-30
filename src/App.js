import React from "react";
//import Countdown from 'react-countdown';
import './App.css';

const emergencies = [{
  "name": "House Fire Emergency",
  "message": "Put water on the fire"
  },
  {
  "name":"Forest Fire Emergency",
  "message":"Extinguish the forest fire"
  },
  {
  "name":"Earthquake Emergency",
  "message": "There's been an earthquake, call the police!'"
  }];

  const countdownTimes = [240, 100, 200, 150, 250, 60, 350, 75, 30];
  
function DisplayEmergency() {
  let index = Math.floor(Math.random() * emergencies.length);
  let emergency = emergencies[index].name
  return (
  <h1>{emergency}</h1>
  )
}

function DisplayCountdown() {
  let timeIndex = Math.floor(Math.random() * countdownTimes.length);
  let countdown = countdownTimes[timeIndex];
  return (
    <h1>{countdown}</h1>
  )
}
  

const App = () => {
  /*
    const Timer = () => {
      const [time, setTime] = useState();
        useEffect(() => {
          
          
          const intervalId = setInterval(() => {
            setTime(timeIndex - 1); 
          }, 1000)
          return () => {
            clearInterval(intervalId);
            <h2>{time}</h2>
          }
        }, [time]); 
      }
      */

  return (
    <div>
          <DisplayEmergency />
          <div>
          <DisplayCountdown />
          </div>
   </div>
           
  );
}

export default App;
