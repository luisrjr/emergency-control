import {useEffect} from "react";
import './App.css';

const EmergButtons = (props) => {
    return (
     <button>{props.name}</button>
    );
  }

const DisplayEmergency = () => {
 let emergencies = [
        { id:1,
          name: "House Fire Emergency",
          message: "Put out the fire in the house"},
        { id:2,
          name: "Forest Fire Emergency",
        message: "Put out the Forest Fire"}
      ]

let randomEmergency = Math.floor(Math.random() * emergencies.length);
  
    return (
      <h1>{emergencies[randomEmergency].name}</h1>
    );   
  }

  const startInterval = setInterval(() => {
    DisplayEmergency();
}, 30000);

    //Clearing the interval
    const stopInterval = setTimeout(() => {
      clearInterval(startInterval);
    });

const App = () => {

  //const {timer} = useState("10000");

    useEffect(() => {
      setInterval(() => {
        DisplayEmergency();
    }, 30000);
      setTimeout(stopInterval, 400000)
    })    

  return (
    <div className="App">
      <body>
      <DisplayEmergency />
      <div className='button-container'>
      <div className="button-grid">
      <EmergButtons name="Fire Extinguisher"/>
      <EmergButtons name="Ambulance"/>
      <EmergButtons name="Helicopter"/>
      <EmergButtons name="Police"/>
      <EmergButtons name="First-Aid"/>
      </div>
      </div>
      </body>
    </div>
  );
}

export default App;
