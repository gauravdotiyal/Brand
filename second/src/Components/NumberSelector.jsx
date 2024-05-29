import React, { useState } from 'react'
import styled from 'styled-components'
 


export default function NumberSelector({selectNumber,setSelectedNumber}) {
    
    const arr=[1,2,3,4,5,6];
    

  return (
    <Number >
         {arr.map((value,i)=>(
            <Box 
            key={i}
            isSelected={value===selectNumber}
            onClick={()=>setSelectedNumber(value)}>
                {value } 
            </Box> 
         ))}
         
    </Number>
  )
}

const Number=styled.div`
  display:flex;
  margin: 20px; 
  padding:23px;
  gap: 24px;
`

const Box =styled.div` 
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 52px; 
    font-weight:bold;
    background-color: ${(props)=>(props.isSelected? "black":"white")};
    color: ${(props)=>(props.isSelected?"white":"black")};

`;
