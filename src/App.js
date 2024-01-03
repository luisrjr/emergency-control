import React from "react";
import { CountDown } from "./components";
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


const App = () => {
  let index = Math.floor(Math.random() * emergencies.length);
  let emergency = emergencies[index].name;


  return (
    <div>
      <h1>{emergency}</h1>
      <div>
        <CountDown />
      </div>
    </div>
  );
};

export default App;
