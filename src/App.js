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




const App = () => {
  const [emergency, setEmergency] = useState("");


const handleClick = () => {
  let index = Math.floor(Math.random() * emergencies.length);
  setEmergency(emergencies[index]);
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
      </body>
    </div>
  );
}

export default App;
