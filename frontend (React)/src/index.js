import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import '@fonts/icomoon/icomoon.woff';
import { publicProvider } from 'wagmi/providers/public'
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { alchemyProvider } from 'wagmi/providers/alchemy'
const projectId = '2c515028cc183de99fa6a655231e348b'



const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [alchemyProvider({ apiKey: 'hP6CpRTZybyLdjDaD_PE4qZD2ZlMgkQF' }), publicProvider()],
  )



const config = createConfig({
    autoConnect: true,
    connectors: [
     
      new WalletConnectConnector({
        chains,
        options: {
          projectId: projectId,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }),
    ],
    publicClient,
    webSocketPublicClient,
  })
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WagmiConfig config={config}>
    <BrowserRouter>
        <ToastContainer theme="dark" autoClose={3000} />
        <App/>
    </BrowserRouter>
    </WagmiConfig>
);
