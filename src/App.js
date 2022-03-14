import RollDice from './components/RollDice';
import React from 'react';
import "./App.css";
import Eth from './Eth';
import Bet from './Bet';
import Header from './Header';
import Eth2 from './Eth2';


function App() {
  return (
     <>
     <Header/>
     <div className='App'>
      <RollDice/>
      <Bet/>
      <Eth/>
      <Eth2/>
     </div>
    </>
  );
}

export default App;
