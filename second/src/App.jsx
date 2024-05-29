import "./App.css";
import styled from "styled-components";
import Startgame from "./Components/Startgame";
import Gameplay from "./Components/Gameplay";
import { useState } from "react";

function App() {

  const [isGamestart,setIsGamestart]=useState(false);
  
  const changeGame = () => {
       setIsGamestart((prev)=>!prev)
  } 
  
  return (
    <>
      {isGamestart?<Gameplay/> :  <Startgame toggle={changeGame} />}
    </>
  );
}

export default App;
