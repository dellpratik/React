import React from "react";

//import logo from './logo.svg';
//import './App.css';

import FunctionalComp from "./Components/FunctionalComp";
//import ClassComp from "./Components/ClassComp";
import { ClassComp, ClassComp1 } from "./Components/ClassComp";

import Click from "./Components/Click";
import  Counter  from "./Components/Counter";

import UpdatedComp from "./Components/HigherOrder";

import ParentComp from "./Components/ParentComp";

function App() {
  return (
    <div>
    <h1>Hello and Welcome !!!</h1>
    <h1>
      This is about Components !!!
    </h1>    
    <FunctionalComp></FunctionalComp>    
    <ClassComp></ClassComp>
    <ClassComp1></ClassComp1>
    <Click></Click>
    <Counter></Counter>
    <ParentComp></ParentComp>
    </div>
  );
}

export default App;
