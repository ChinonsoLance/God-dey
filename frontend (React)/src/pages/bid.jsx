// styling
import styled from 'styled-components/macro';

// components
import StyledModal from '@ui/StyledModal';
import GradientBtn from '@ui/GradientBtn';
import {NumericFormat} from 'react-number-format';
import {toast} from 'react-toastify';
import { parseEther } from 'viem';

// hooks

import {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';

// utils
import classNames from 'classnames';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { usePrepareSendTransaction, useSendTransaction } from 'wagmi';
import { useAccount } from 'wagmi';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { ReactSession } from 'react-client-session';
ReactSession.setStoreType("sessionStorage")


const apiUrl = process.env.REACT_APP_API_URL

const StyledBidModal = styled(StyledModal)`
  .content {
    max-width: 500px;

    &_header {
      text-align: center;
    }

    &_main {
      margin: 30px 0;
      gap: 10px;

      .row {
        flex-direction: column;
      }
    }
  }

  @media screen and (min-width: 414px) {
    .content_main .row {
      flex-direction: row;
    }
  }
`;

const Bid = () => {

    const {art} = useParams()
    const [price, setPrice] = useState("")
    const [to, setAddress] = useState("")
    const {address, isConnected} = useAccount()
    const [isLogged, setIsLogged] = useState(ReactSession.get("loggedIn"))
    const [walletAddress, setWalletAddress] = useState(ReactSession.get("wallet"))

    
    
      const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
        to: to,
        value: parseEther(price),
      })

      // const SendTransaction = () => {
      //   sendTransaction()
      //   isSuccess && (
      //       axios.post(`${apiUrl}/place-bid`, {address, to, art, price })
      //       .then((res)=>{
      //           toast.success(res.data);
      //           reset();
      //       })
      //   )
      // }
      
 const placeBid = () => {
    axios.post(`${apiUrl}/place-bid`, {address: isConnected && address || walletAddress, to, art, price }, 
    {headers: {
      'Content-Type': 'multipart/form-data'
    }})
    .then((res)=>{
      if(res.data.success) {
        toast.success(res.data.message);
        setAddress("")
        setPrice('')
        reset();
    }
    else{
      toast.error(res.data.message)
    }
 })
}
    

    useEffect(()=>{
        axios.get(`${apiUrl}/get-art?id=${art}`)
        .then((res)=>{
            //console.log(typeof(res.data.price))
            setPrice(res.data.price)
            setAddress(res.data.address)
        })
    },[address])

   // const minBid = price,
   const fee = 0.00;
    
    const [bid, setBid] = useState(0);
    const {control, handleSubmit, formState: {errors}, reset} = useForm();

   
    const handleBid = () => {
       
       
            toast.success('Bid placed successfully');
            reset();
       
    }

    const getTotal = () => {
        return bid !== 0 ? (+bid + fee).toFixed(2) : (price + fee);
    }

    return (
        <>
        <div className='container my-4 py-4'>
            <div className='row'>
                <div className='col-lg-6 col-12 col-sm-12 mx-auto'>
                <div className=" card p-3 border content_header d-flex flex-column g-30 rounder-3">
                    <div className="card-body p-3">

                    
                    
                    <div className="d-flex flex-column g-10">
                    <h4>Purchase Art</h4>
                    <p>Purchase an art from pictorallab</p>
                    </div>
                    
                    <div className='modal-body'>
                    <div className="content_header d-flex flex-column g-30">
                
                        <form className="d-flex my-2">
                            <Controller control={control}
                                        name="bid"
                                        rules={{required: true, min: price}}
                                        defaultValue=""
                                        render={({field}) => (
                                            <NumericFormat
                                                className={classNames('field field--outline flex-1', {'field--error': errors.bid})}
                                                placeholder={`${price} ETH`}
                                                value={price}
                                                onChange={(e)=>{setPrice((e.target.value).toString())}}
                                                thousandSeparator={false}
                                                allowNegative={false}
                                                
                                                name={field.name}
                                                
                                            />
                                        )}/>
                        </form>
            </div>

            <div className="content_main d-flex flex-column">
                <p className="row d-flex justify-content-between my-2">
                    You must bid at least: <span className="text-bold text-light">{price} ETH</span>
                </p>
                <p className="row d-flex justify-content-between my-2">
                    Service fee: <span className="text-bold text-light">{fee} ETH</span>
                </p>
                <p className="row d-flex justify-content-between my-2">
                    Total bid amount:
                    <span className="text-bold text-light">
                            {getTotal()} ETH
                        </span>
                </p>
            </div>
            <div className="content_footer d-flex flex-column g-20">
                <GradientBtn tag="button"  onClick={placeBid}>Place a bid</GradientBtn>
                <Link to ="/explore" className="btn btn--outline">
                <button >
                    View more arts
                </button>
                </Link>
                
            </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

                   
                    </>
                
    )
}

export default Bid