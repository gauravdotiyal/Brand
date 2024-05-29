import React from 'react'
import styled from 'styled-components'


export default function Rules() {
  return (
    <RulesContainer>
    
        <h2>How to play Dice Game</h2>
          <div className="text">
            <p>1. Select any number</p>
            <p>2. Click on the dice image</p>
            <p>3. If You click the same number that was on the dice then you will get some points</p>
            <p>4. If you get wrong guess then two points get deducted</p>
          </div>
        
    </RulesContainer>
  )
}

const RulesContainer=styled.div`
  background-color:whitesmoke;
  padding: 20px;
  max-width:800px;
  border-radius: 12px;
   
  h2{
    font-size: 34px;
    font-weight: bold;
  }
  p{
    font-size: 23px;
    line-height: 12px;
  }
  .text{
    margin-top: 24px;
  }
 
`
