import React, {useState} from "react";
//import Countdown from 'react-countdown';
import './App.css';

const emergencies = [
    "House Fire Emergency",
    "Forest Fire Emergency",
    "Earthquake Emergency"
  ];




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
          <h1>{emergency}</h1>
        </div>
          <div className="button-grid">
            <button onClick={handleClick}>Start</button>
          </div>
      </body>
    </div>
  );
}

export default App;
