import React, { useState, useEffect } from "react";
//import Countdown from 'react-countdown';
import './App.css';

const emergencies = [{
  name: "House Fire Emergency"
  }, 
  {
    name:"Forest Fire Emergency"
  }, 
  {
    name:"Earthquake Emergency"
  }];


const App = () => {

  const EmergButtons = (props) => {
    
    return (
      <button>{props.name}</button>
    );
  }

  const Timer = () => {
    const [time, updateTime] = useState(10);

    const countdown = () => {
      return (
        updateTime(time - 1)
      )
    }

    useEffect(() => {
      const countdownInterval = setInterval(countdown, 1000);
      return () => {if(time <= 0) 
        clearInterval(countdownInterval);
      }
    },);

    return (
      <h3>{time}</h3>
    )

  }


  const DisplayEmergency = () => {
    const [emergency, updateEmergency] = useState("Building fire");

    const randomEmergency = () => {
      const index = Math.floor(Math.random() * emergencies.length);
      return (
        updateEmergency(emergencies[index])
      )
    }

    useEffect(() => {
      const intervalID = setInterval(randomEmergency, 10000);
      return () => clearInterval(intervalID);
    }, []);
    return (
      <h1>{emergency}</h1>
    );
  }



  return (
    <div className="App">
      <body>
        <div>
          <DisplayEmergency />
        </div>
        <div className='button-container'>
          <div className="button-grid">
            <EmergButtons name="Extinguish" />
            <EmergButtons name="Ambulance" />
            <EmergButtons name="Helicopter" />
            <EmergButtons name="Police" />
            <EmergButtons name="Start" onclick={() => DisplayEmergency()}/>
          </div>
        </div>
        <div className="countdown-display">
          <Timer />
        </div>
      </body>
    </div>
  );
}
//<Countdown date={Date.now() + 20000} />
export default App;
