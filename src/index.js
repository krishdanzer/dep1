import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MoralisProvider} from 'react-moralis';

const appId = 'b2W1CaQ6C1oT6vkCTHuouZ9uE9CjpPJtFNvTrhKS';
const serverUrl = 'https://kshgiaxgjskz.usemoralis.com:2053/server';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <App/>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

