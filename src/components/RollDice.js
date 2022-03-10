import React, { useState } from "react";
import './RollDice.css';
import Die from "./Die";

import { ethers } from "ethers";


const RollDice = ({ sides }) => {
    const [state, setState] = useState ({
        die: "one",
        rolling: false,
        totalscore: 0,
    });

    const { die,  rolling, totalscore } = state;
    const roll = (props) => {
        const newDie = sides[Math.floor(Math.random() * sides.length)];
        const score = Object.values(newDie);

        setState({
            die: Object.keys(newDie),
           
            rolling: true,
            totalscore: score[0], 
 
        });

      setTimeout(() => {
                   setState((prevState) => ({...prevState, rolling: false}))
      },5 );

    };
    
    return (
        <>

      
       <div style={{  width:'250px',    }} className="roll-dice">
       
           <div className="rolldice-container">     
           
       <Die face= {String=(die)} rolling={rolling}/>
           </div>
           <button onClick={roll} disabled={rolling}>

           {rolling ? "Rolling..." : "Roll Dice"}

           </button>
           
           <h2 style={{  fontSize:'25px' }} >Total Score: {totalscore}</h2>
           
           <input type="text" placeholder="Number you want to select"></input>
       </div>
    
        </>
    );
};


RollDice.defaultProps = {
    sides: [
        {one: 1},
        {two: 2},
        {three: 3},
        {four: 4},
        {five: 5},
        {six: 6},
    ],
};

 export default RollDice;