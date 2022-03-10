import React, { Component, useState } from 'react';
import { useMoralis } from 'react-moralis';

function bet() {
    
  return (
  
    <div className='Bet'>
        <form>
            <div>
                <label className='n1'>Name</label>
                <label className='n2'>Time</label>
                <label className='n3'>Price</label>

                <tr></tr>
                <select className='spa'>
                    <option value="eth">Eth</option>
                    <option value="sol">sol</option>
                    <option value="btc">cardano</option>
                    <option value="btc">btc</option>
                    <option value="btc">win-nft-horse</option>
                    <option value="btc">Bored-ape</option>
                    <option value="btc">Cryptopunks</option>
                    <option value="btc">mayc</option>
                    <option value="btc">clonex</option>
                    <option value="btc">cLanders</option>
                    <option value="btc">world-of-women</option>
                    <option value="btc">Veefriends</option>
                    <option value="btc">doodles</option>
                    <option value="btc">Cool-cats</option>
                    <option value="btc">bored-kennel</option>
                    <option value="btc">gutter-cat</option>
                    <option value="btc">Azuki</option>

                </select>
                <select className='betime'>
                    <option value="1">10-min</option>
                    <option value="2">30-min</option>
                    <option value="3">1-hour</option>
                    <option value="3">24-hours</option>
                </select>
                <select className='time'>
                    <option value="increases">increases</option>
                    <option value="decreases">decreases</option>
                    <option value="same">same</option>
                </select>
            </div>
        </form>
    </div>
  );
};

export default bet;