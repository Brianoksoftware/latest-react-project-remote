import React from "react";
import About from './About'

import {useState, useEffect} from "react";


import './App.css';
import './brians.css';


function App(){

  const[lighttheme, setLighttheme] = useState(false);

  const themeChanger = () => {
    setLighttheme(!lighttheme);
  };

  // Use the conditional class to change background color
  const appclass = lighttheme ? 'whiteBackground' : 'defaultBackground';

  return(

    <div className="App">
      <div className={appclass}>
        <button className="switch_theme" onClick={() => {themeChanger()}}> light mode </button>
        <h1>My webpage</h1>
        <img src="space1.svg" alt="main image"/>

        <About/>
      </div>
    </div>
  )
}

export default App;