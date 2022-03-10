import React from 'react'

function Leads(props) {


  return (props.trigger) ? (
    <div className='leadb1'>
      <button  onClick={() => props.setTrigger(false)} className='xss'> x </button>
      <label>Winners Till Now</label>
      <p>OxeE1 --  26.7 leading</p>
      <p>Oxf1b --  22.1 leading</p>
      <p>Ox71b --  18 leading</p>
      <p>Oxf9A --  13.4 leading</p>
      <p>Ox2e8 --  8.9 leading</p>
     { props.childern }
    </div>
  ) : "";
}

export default Leads