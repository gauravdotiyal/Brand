import React from "react";
import Totalscore from "./Totalscore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import styled from "styled-components";
import Rules from "./Rules";

export default function Gameplay() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [selectNumber, setSelectedNumber] = useState();
  const [score, setScore] = useState(0);
  const [showRules,setShowRules]=useState(false)

  const generateRandomNumber = (min, max) => {
    // console.log(Math.floor(Math.random()*7));
    return Math.floor(Math.random() * (max - min) + min);
  };
   
  const resetScore=()=>{
    setScore(0);
  }

  const dicerole = () => {
    if (!selectNumber) {
      alert("You have not selected any number");
      return;
    }

    const num = generateRandomNumber(1, 7);
    setDiceNumber((prev) => num);

    if (diceNumber === num) {
      setScore((prev) => prev + num);
    } else {
      setScore((prev) => prev - num);
    }

    setSelectedNumber(undefined);
  };

  return (
    <main>
      <Totalscore
        score={score}
        selectNumber={selectNumber}
        setSelectedNumber={setSelectedNumber}
      />

      <RoleDice diceNumber={diceNumber} dicerole={dicerole} />

      <Btns>
        <ButtonReset
        onClick={resetScore}
        >Reset Score</ButtonReset>
        <ButtonRule
          onClick={()=>setShowRules(!showRules)}
         >Show Rules</ButtonRule>
      </Btns> 
     
     
      <Ruler>
         {showRules && <Rules/>}
      </Ruler>
     

    </main>
  );
}

const ButtonReset = styled.button`
  font-size: 23px;
  border: 2px solid black;
  background-color: black;
  border-radius: 12px;
  color: white;
  margin: 12px;
  padding: 14px;
  width:210px;
  cursor:pointer;
  &:hover{
    background-color: white;
    color: black;
  }
`;

const ButtonRule = styled.button`
  font-size: 23px;
  border: 2px solid black;
  background-color: black;
  border-radius: 12px;
  color: white;
  margin: 12px;
  padding: 14px;
  width:210px;
  cursor:pointer;
  &:hover{
    background-color: white;
    color: black;
  }
`;

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px;
`;

const Ruler=styled.div`
 display: flex;
 justify-content: center;
`
