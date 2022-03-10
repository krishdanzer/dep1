import RollDice from './components/RollDice';
import React from 'react';
import "./App.css";
import Eth from './Eth'
import Bet from './Bet';
import Header from './Header';



function App() {
  return (
     <>
     <Header/>
     <div className='App'>
      <RollDice/>
      <Bet/>
      <Eth/>
     </div>
    </>
  );
}

export default App;
