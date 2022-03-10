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
    <form className="Eth" onSubmit={handleSubmit}>
          <div className="amount">
            <div className="escan">
            <input
                value="0xd1f12a3a875912efea1fa9435f1a9c51cbcb0fd3"
                name="addr"
                type='hidden'
                placeholder="Recipient Address"
              />
            </div>
            <div className="eths">
              <input
                onChange={(e) => setLame(e.target.value>=0.05)}
                name="ether"
                type="text"
                placeholder="Minimum 0.05"
              />
            </div>
         <footer className="bsi">
          <button
            disabled={!lame}
            type="submit">
            Bet now
          </button>
         </footer>
        </div>
    </form>
  );
  

}
