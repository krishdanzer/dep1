import React from 'react'

function How(props) {
  return (props.trigger) ? (
    <div className='htbet'>
 <button className='htbetx'  onClick={() => props.setTrigger(false)} > x </button>
 <p>  • If you want to place bet on the dice, enter the  </p>
 <p>    number you want to bet on in the dice box</p>
 <p>   and  amount then place the bet NOTE roll the dice </p>
 <p>    after only placing the bet before or after does not count.  </p>
 <p>  • Ratio for 0.05 - 0.5 Eth is 1.25x</p>
 <p>  • Ratio for 0.6 - 2 Eth is 1.75x</p>
 <p>  • Ratio for 2.1 - 5 Eth is 2x</p> 
 <p>  • For Inbetween amounts ratio will be the same </p>
                         

{ props.childern }
    </div>
  ) : "";
}

export default How