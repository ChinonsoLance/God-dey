// styling
import styles from './style.module.scss';

// components
import LazyImage from '@components/LazyImage';
import Spring from '@components/Spring';

// utils
import classNames from 'classnames';

// assets
import metamask from '@assets/wallets/metamask.webp';
import coinbase from '@assets/wallets/coinbase.webp';
import glow from '@assets/wallets/glow.webp';
import phantom from '@assets/wallets/phantom.webp';
import walletConnect from '@assets/wallets/walletconnect.webp';
import bitski from '@assets/wallets/bitski.webp';
import UserImage from '@assets/wallets/user-login.png'
import { useAccount, useConnect, useDisconnect, useEnsName } from 'wagmi'

import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { NavLink } from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import { useState } from 'react';
ReactSession.setStoreType("sessionStorage")
const Wallet = () => {
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    const {isConnected, address} = useAccount()
    
    const [isLogged, setIsLogged] = useState(ReactSession.get("loggedIn"))
    const [walletAddress, setWalletAddress] = useState(ReactSession.get("wallet"))
    console.log(isLogged)

  const connectInjected = () => {
       
       let connector = connectors[1]
       console.log({connector})
        connect(  {connector} )
  }
  const connectCoinbase = () => {
    
  }
  const connectWalletConnect = () => {
    let connector = connectors[0]
    //console.log({connector})
     connect(  {connector} )
  }

   const {disconnect} = useDisconnect()

   const logOut = () => {
    ReactSession.set("loggedIn",false)
    ReactSession.set("wallet","")
    setIsLogged(false)
    setWalletAddress("")
    
   }
       
    
console.log(!isLogged)
    return (
        <section className="mt-0">
            <div className="container">
                <div className={`${styles.wrapper} bg-secondary border-10`}>
                    <div className="d-flex flex-column g-15">
                        <h3>You need an Ethereum wallet to use pictorallab</h3>
                        <p className={`${styles.subtitle} h6`}>
                            Login with one of our available providers
                        </p>
                    </div>
                    <div className={styles.main}>
                  { (isConnected || isLogged) &&
                  (
                    <>
                         <div className="d-flex">
                            <center>
                            <p className='text-danger text-center' align="center">Connected to <code style={{color:'red'}}>{address}{walletAddress}</code></p>
                        
                            {isConnected && (<button className="btn btn-outline border" onClick={() => {disconnect()}}>
                                Disconnect
                            </button>)}

                            {isLogged && (<button className="btn btn-outline border" onClick={() => {logOut()}}>
                                Disconnect
                            </button>)}


                            </center>
                        
                        </div>
                    </>
                  )
                    ||
                    (
                        <>

                        <Spring>
                             <NavLink to="/manual-login">
                                         <div className={`${styles.main_item} border-hover border-hover--horizontal`}>
                                             <LazyImage className={styles.img} src={UserImage} alt="Wallet Connect"/>
                                             <h5 className="main_item-title text-overflow">Email and Password</h5>
                                            
                                         </div>
                             </NavLink>
                         </Spring>
                         <div className='row'>
                        <div className='p-2'>
                            <h5 className='text-center'>
                                New to pictorallab? <NavLink to='/login' style={{color:"orange"}}>Register Here</NavLink>
                            </h5>
                        </div>
                    </div>
                        { <Spring >
                                         <div className={`${styles.main_item} border-hover border-hover--horizontal`} onClick={() => connectInjected()}>
                                             <LazyImage className={styles.img} src={metamask} alt="metamask"/>
                                             <h5 className="main_item-title text-overflow">Injected Wallet</h5>
                                            
                                         </div>
                         </Spring> }
     
     
                         <Spring>
                                         <div className={`${styles.main_item} border-hover border-hover--horizontal`} onClick={() => connectWalletConnect()}>
                                             <LazyImage className={styles.img} src={walletConnect} alt="Wallet Connect"/>
                                             <h5 className="main_item-title text-overflow">Wallet Connect</h5>
                                            
                                         </div>
                         </Spring>
     
                         
                         </>
                    )
                    }






                        {/* {
                           !isConnected && (wallets.map((wallet, index) => (
                                <Spring key={index} index={index} onClick={() => connect()}>
                                    <div className={`${styles.main_item} border-hover border-hover--horizontal`}>
                                        <LazyImage className={styles.img} src={wallet.image} alt={wallet.name}/>
                                        <h5 className="main_item-title text-overflow">{wallet.name}</h5>
                                        {
                                            wallet.tag && (
                                                <span className={classNames(`${styles.label} label-tag`, {'accent': wallet.tag === 'popular'})}>
                                                {wallet.tag}
                                            </span>
                                            )
                                        }
                                    </div>
                                </Spring>
                            )))
                        } */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wallet