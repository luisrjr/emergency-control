import React, {useState, useEffect } from "react";
import './App.css';

const emergencies = ["House Fire Emergency", "Forest Fire Emergency", "Earthquake Emergency"];


const App = () => {
  
  const EmergButtons = (props) => {
    

    return (
     <button>{props.name}</button>
    );
  }

  const DisplayEmergency = () => {
    const [emergency, updateEmergency] = useState("");
    
    const randomEmergency = () => {
      const index = Math.floor(Math.random() * emergencies.length);
       return (
        updateEmergency(emergencies[index])
       )
    }

    useEffect(() => {
       const intervalID = setInterval(randomEmergency, 5000);
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
      <EmergButtons name="Extinguish"/>
      <EmergButtons name="Ambulance"/>
      <EmergButtons name="Helicopter"/>
      <EmergButtons name="Police"/>
      </div>
      </div>
      </body>
    </div>
  );
}

export default App;
