import React from 'react'

function Report(props) {
  return (props.trigger) ? (
    <div class="container">
    <button  onClick={() => props.setTrigger(false)} className='xss4'> x </button>
    <form action="https://formspree.io/f/mknybaee" method="POST" id="my-form">

      <div class="form-group">
        <label for="firstName">Eth Address</label>
        <input type="text" id="firstName" name="firstName"/>
      </div>
     <br></br>
      <div class="form-group1">
        <label for="email">Email</label>
        <input type="email" id="email" name="email"/>
      </div>
      <br></br>
      <div class="form-group2">
        <textarea  name="massage" id="massage" cols="30" rows="10"></textarea>
      </div>
      <br></br>
      <button className="form-group2" type="submit">Report</button>
    </form>
    { props.childern }
  </div>
  ): "";
}

export default Report