import React, {useState} from "react";
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

const time = [240, 100, 400, 50]



const App = () => {
  const [emergency, setEmergency] = useState("");



const handleClick = () => {
  let index = Math.floor(Math.random() * emergencies.length);
  setEmergency(emergencies[index]);
}

const Timer = () => {
  let timeIndex = Math.floor(Math.random() * time.length);
  let countdown = time[timeIndex];
   if (countdown <= 0) {
     countdown -= 1;
   }
    return (
      <div>
      <span>{countdown}</span>
      </div>
    )
}


  return (
    <div className="App">
      <body>
        <div>
          <h1>{emergency.name}</h1>
        </div>
          <div className="button-grid">
            <button onClick={handleClick}>Start</button>
          </div>
           <div id="emergency-message">
            {emergency.message}
        </div> 
        <Timer />
      </body>
    </div>
  );
}

export default App;
