// styling
import styles from './style.module.scss';
import {useState} from 'react'
// components
import Title from '@components/Title';
import SimplePageHeader from '@components/SimplePageHeader';
import AvatarUpload from '@layout/profile/AvatarUpload';
import ProfileDetails from '@layout/profile/ProfileDetails';
import { useAccount, useBalance } from 'wagmi';
import GradientBtn from '@ui/GradientBtn';
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import ItemsGridItem from '@components/ItemsGrid/ItemsGridItem';
import Spring from '@components/Spring';
import Avatar from '@ui/Avatar';
import LazyImage from '@components/LazyImage';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ReactSession } from 'react-client-session';

const apiUrl = process.env.REACT_APP_API_URL

const Dashboard = () => {
    ReactSession.setStoreType("sessionStorage")
    const navigate = useNavigate()
    const [balance, setBalance] = useState(0)
    const {isConnected, address} = useAccount()
    const { data, isError, isLoading } = useBalance({
        address,
      })
      const [arts, setArts] = useState([])
      const [minted, setMinted] = useState(0)
      const [num, setNum] = useState(0)
      const [fee, setFee]  = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword]  = useState("")
      const [reserved, setReserved] = useState(0)
      const [isLogged, setIsLogged] = useState(ReactSession.get("loggedIn"))
      const [walletAddress, setWalletAddress] = useState(ReactSession.get("wallet"))

      const handleSubmit = (e) => {
        e.preventDefault()

      }
//console.log(data)

        const checkMinted = (art) => {
            if(art.status == "approved"){
                return true
            }
            else{
                return false
            }
        }
console.log(walletAddress)


       useEffect( ()=> {
            if(!isConnected) {
                setIsLogged(ReactSession.get("loggedIn"))
                if(isLogged){
                    setWalletAddress(ReactSession.get("wallet"))
                }
            }
        },[])



    useEffect(()=>{
       isConnected && (axios.get(`${apiUrl}/get-user-by-id?id=${address}`)
        .then(res => {
           // console.log(res)
            setBalance(res.data.balance)
            setReserved(res.data.reserved)
        }))

        isLogged && (
        axios.get(`${apiUrl}/get-user-by-id?id=${walletAddress}`)
        .then(res => {
           // console.log(res)
            setBalance(res.data.balance)
            setReserved(res.data.reserved)
        })
        )
    }, [])


    useEffect(()=>{
        isConnected && (
            axios.get(`${apiUrl}/get-user-arts?address=${address}`)
        .then((data)=>{
           setArts(data.data)
           setNum(data.data.length)

          let mintedArts = data.data.filter(checkMinted)
        setMinted(mintedArts.length)
         // console.log(mintedArts)
        })
        )

        isLogged && (
            axios.get(`${apiUrl}/get-user-arts?address=${walletAddress}`)
            .then((data)=>{
               setArts(data.data)
               setNum(data.data.length)
    
              let mintedArts = data.data.filter(checkMinted)
            setMinted(mintedArts.length)
             // console.log(mintedArts)
            })
        )
        
       
    },[])


    useEffect(()=>{
        axios.get(`${apiUrl}/settings`)
        .then(res=>{
            setFee(res.data.mint_fee)
            //console.log(res.data)
        })
    },[])
    
    const checkBalance = () => {
        if(balance > 0){
            navigate('/dashboard/withdraw')
        }
        else{
            toast.error('You have no funds to withdraw')
        }
    }

    
    return (
        <>
            <Title title="Dashboard"/>
            <SimplePageHeader title="Account Statistics"/>
           {(isConnected || isLogged) && ( <main className='py-4'>
                 
                        <>
                       
                       <div className="container">

                        <div className='row'>
                            {/* <div className="col-12  mx-auto my-2">
                                <div className='card'>
                                    <div className="card-body">
                                        <code className="text-center">Connected Address: <span className='text-danger'>{address}</span></code>
                                    </div>
                                </div>
                            </div> */}

                            <div className='col-12 col-sm-12 col-lg-4 mx-auto'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div class="row">
                                            <div className='col-6'>
                                            <NavLink to="/dashboard/transfer" className="btn btn--outline">
                                            <button>
                                                Transfer <i className='fab fa-telegram'></i>
                                            </button>
                                            </NavLink>
                                            </div>
                                            <div className='col-6'>
                                            
                                            <button  className="btn btn--outline" onClick={checkBalance}>
                                                Withdraw <i className='fas fa-download'></i>
                                            </button>
                                             
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>


                            </div>

                            <div className="row">
                            <div className='col-sm-6 col-md-6 col-lg-3 my-2'>
                                <div className='card border-10 h-100'>
                                    <div className='card-body p-4'>
                                        <small>Balance</small><br/>
                                        <h4> {parseFloat(balance).toFixed(4)} {data?.symbol}</h4>
                                        <NavLink to="/dashboard/fund"><GradientBtn tag="button" className="float-end">Fund wallet</GradientBtn></NavLink>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-3 my-2'>
                                <div className='card border-10 h-100'>
                                    <div className='card-body p-4'>
                                        <small>Minted Arts</small><br/>
                                        <h4>{minted}</h4>
                                    </div> 
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-3 my-2'>
                                <div className='card border-10 h-100'>
                                    <div className='card-body p-4'>
                                        <small>My Arts</small><br/>
                                        <h4>{num}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-3 my-2'>
                                <div className='card border-10 h-100'>
                                    <div className='card-body p-4'>
                                        <small>Mint fee</small><br/>
                                        <h4>{fee} ETH</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='col-sm-6 col-md-6 col-lg-3 my-2'>
                                <div className='card border-10 h-100'>
                                    <div className='card-body p-4'>
                                        <small>Reserved balance</small><br/>
                                        <h4>{reserved} ETH</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                       </div>
                        
                        </>
                    <div className='container py-4'>
                            <h4>
                                My Arts
                            </h4>
                        <div className="row p-2">
                            {arts.map((art)=>{
                                return(
                                    <div className="col-12 col-md-6 col-lg-3 p-1">
                                    <Spring index={art.id}>
            <div className={`${styles.wrapper} border-hover bg-primary p-2`}>
                {/* <div className="author d-flex align-items-center g-10">
                    <Avatar src={author.avatar} alt={author.nickname} size="xs" isVerified={author.isVerified} />
                    <NavLink className="text-sm text-bold text-light link-hover link-hover--invert"
                          to="/author"
                          style={{pointerEvents: isPrivate ? 'none' : 'auto'}}>
                        @{author.nickname}
                    </NavLink>
                </div> */}
                <div className={`${styles.media} square border-10`}>
                    <LazyImage src={`${apiUrl}/${art.file}`} alt={art.name} />
                </div>
                <div className={styles.main}>
                    <div className="d-flex align-items-center justify-content-between g-10">
                        <NavLink className="h6 text-overflow link-hover" to={`/explore/item/${art.id}`}>
                            {art.name}
                        </NavLink>
                        <button aria-label="Menu">
                            <i className="icon icon-ellipsis"></i>
                        </button>
                    </div>
                    <div className={`${styles.main_price} text-sm text-bold`}>
                        <div className="d-flex g-10">
                            <span>{art.price} ETH</span>
                            {/* <span className="text-light">{available}/{qty}</span> */}
                        </div>
                       
                    </div>
                    <div className="float-end">
                         <span className={`badge bg-secondary text-white text-sm link-hover link-hover--invert`}>
                               
                            {art.status}
                        </span> 
                       
                    </div>
                </div>
            </div>
        </Spring>
                                    </div>
                                )
                            })}
                           
                            
                        </div>
                    </div>
                        
                       
                   
            </main>)
            ||

            (
                <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-lg-5 mx-auto py-4 my-4'>
                                   
                                        <center>
                                        <h4 className='my-2 text-center'>
                                       Login to view this page
                                        </h4>
                                        <Link to="/connect-wallet">
                                        <GradientBtn  tag="button" >Login to pictorallab</GradientBtn>
                                        </Link>
                                        
                                        </center>
                                   
                
                        </div>
                    </div>
                </div>
              
                
                </>
            )
            
            }
        </>
    );
}

export default Dashboard