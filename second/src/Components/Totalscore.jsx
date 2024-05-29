import React from "react";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import { useState } from "react";


export default function Totalscore({score,selectNumber,setSelectedNumber}) { 

  return (
    <ScoreContainer>
      
      <div>
      <h1>{score}</h1>
      <p>Total Score</p>
      </div>
      
      
      <div className="numbers">
       <NumberSelector selectNumber={selectNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      
    </ScoreContainer>
  );
}

const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-around; 
  text-align: center; 
  h1 {
    font-size: 100px;
    line-height: 5px;
  }
  p {
    font-size: 24px;
    font-weight: bold;
  }
  .numbers{
    display: flex;
  }
`;
