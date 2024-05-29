import React, { useState } from 'react'
import styled from 'styled-components'


export default function RoleDice({diceNumber,dicerole }) { 


 
     

  return (
    <Dicepage>
         <div className='dice' onClick={dicerole}>
             <img src={`/Images/Dice/dice_${diceNumber}.png`} alt="" />
         </div>

          <p>Click to roll the dice</p>
    </Dicepage>
  )
}


const Dicepage=styled.div`
     display: flex; 
     /* justify-content: center; */
     align-items: center;
     flex-direction: column;
     margin-top: 23px;

     .dice{
        cursor: pointer;
     }

     p{
        font-size:23px;
        border: 2px solid black ;
        /* background-color: black; */
        border-radius: 12px;
        /* color: white; */
        margin: 12px;
        padding:14px;
     }
`