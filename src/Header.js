import React  from 'react';
import Popups from './assets/Popups';
import { useState } from 'react';
import { useMoralis } from 'react-moralis';
import Supply from './assets/Supply';
import Leads from './assets/Leads';
import How from './assets/How';
import Report from './assets/Report';


export default function Header() {
   const [buttonpopup, setButtonpopup] = useState();
   const [buttonpop, setButtonpop] = useState();
   const [buttonpo, setButtonpo] = useState();
   const [buttonp, setButtonp] = useState();
   const [report, setReport] = useState();
   const { authenticate, user } = useMoralis();


  return (
    <div  className='head'>
        <h1 className='but'>Nft-Casino</h1>
        <p2 className='p2'>A Brand New Website New things will Be Updated Every week Stay Tuned!</p2>
        <button className='lg'  onClick={() => authenticate()} >SignIn</button>
        { user && (
         <p1 className='usb'>
           ID:{user.attributes.ethAddress}</p1>
           )}
      { user && (
         <p2 className='usb2'>
           Balance:00000{}</p2>
           )}
           
   
        
        <button  onClick={() => setButtonpopup(true)} className='sg'>Donate</button>
        <Popups trigger={buttonpopup} setTrigger={setButtonpopup}> 
        
        </Popups>
        <button  onClick={() => setButtonpop(true)} className='sup'>supply/stake</button>
        <Supply trigger={buttonpop} setTrigger={setButtonpop}> 
        
        </Supply>
        <button  onClick={() => setButtonpo(true)} className='lead'>LeadBoard</button>
        <Leads trigger={buttonpo} setTrigger={setButtonpo}> 
        
        </Leads>
        <button  onClick={() => setButtonp(true)} className='howt'>How-to-bet</button>
        <How trigger={buttonp} setTrigger={setButtonp}> 
        
        </How>
        <button  onClick={() => setReport(true)} className='howtr'>Report</button>
        <Report trigger={report} setTrigger={setReport}> 
        
        </Report>
    </div>
  )
}

