import styled from "styled-components"


export default function Startgame({toggle}) {
  return (
    <Container>
    
        <div>
            <img src="/Images/dices.png" alt="" />
        </div>
        
        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>

    </Container>
  )
}
const Container =styled.div`
   max-width: 1180px;
   display: flex;  
   height: 100vh;
   margin:0 auto;
   align-items : center;
   justify-content: space-between;
   .content{
     font-size: 45px;
   }
`;

 

const Button =styled.button`
 color: white;
 background-color: black;
 padding:10px 18px;
 min-width: 220px;
 border: none;
 font-size: 30px;
`;

