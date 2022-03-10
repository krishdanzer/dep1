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

function Popups(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    await startPayment({
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };

  return (props.trigger) ? (
   
        <div className='popin'>
            <button  onClick={() => props.setTrigger(false)} className='cb'> x </button>

            A Little Help From Our Side
            <form className="" onSubmit={handleSubmit}>
            <div className="escan">
            <input
                value="0xd1f12a3a875912efea1fa9435f1a9c51cbcb0fd3"
                name="addr"
                type='hidden'
                placeholder="Recipient Address"
              />
            </div>
            <div className="tmount">
              <input
                name="ether"
                type="text"
                placeholder="Amount in ETH"
              />
            </div>
         <footer className="pay">
          <button
            type="submit">
            Pay now
          </button>
         </footer>
    </form>
            { props.childern }
        </div>
  ) : "";
}
export default Popups;
