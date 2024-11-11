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

const apiUrl = process.env.REACT_APP_API_URL
const contractAddress = process.env.REACT_APP_CONTRACT

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

const Withdraw = () => {

   
    const [price, setPrice] = useState("")
    const [to, setAddress] = useState(contractAddress)
    const {address, isConnected} = useAccount()
    const [fee, setFee] = useState(0.00);
    const [usdPrice, setUsdPrice] = useState(0)
    const [rate, setRate] = useState(1)
    const [limit, setLimit] = useState(0)

    useEffect(()=>{
        axios.get(`${apiUrl}/get-withdrawal-fee`)
        .then(res=>{
            setFee(res.data)
            //console.log(res.data)
        })
    },[])

    useEffect(()=>{
      axios.get(`${apiUrl}/get-withdrawal-limit?address=${address}`)
      .then(res=>{
          setLimit(res.data)
          console.log(price, limit)
      })
  },[])

    useEffect(()=>{
      axios.get(`${apiUrl}/get-rates`)
      .then(res=>{
          
         ///let ethPrice=rate['chart']['result'][0]['meta']['regularMarketPrice']
         
         setRate((res.data))
         console.log(res.data)
      })
  },[])

    useEffect(()=>{
        setUsdPrice((rate*price).toFixed(2))
    },[price])


    
    const [bid, setBid] = useState(0);
    const {control, handleSubmit, formState: {errors}, reset} = useForm();
 


    
    
    const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
        to: contractAddress,
        value: parseEther(String(fee)),
        data: "0x"
      })

      const SendTransaction = () => {

        const data = {
            address,
            price
        }
        if(price!=""){
          if(price>=limit){
            sendTransaction()
            if(isSuccess) {
                axios.post(`${apiUrl}/withdraw`, data, 
                {headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                }
                )
                .then(res=>{
                    toast.success("Withdrawal request processing");
                    reset();
                })
                
            }
          }
          else{
            toast.error(`minimum withdrawal is ${limit} ETH`)
          }
           
        }
        else{
            toast.error("Amount cannot be empty")
        }
       
      
      }

     

   // const minBid = price,
   
    

    return (
        <>
        <div className='container my-4 py-4'>
            <div className='row'>
                <div className='col-lg-6 col-12 col-sm-12 mx-auto'>
                <div className=" card p-3 border content_header d-flex flex-column g-30 rounder-3">
                    <div className="card-body p-3">

                    
                    
                    <div className="d-flex flex-column g-10">
                    <h4>Withdraw from your pictorallab wallet</h4>
                    <p></p>
                    </div>
                    
                    <div className='modal-body'>
                    <div className="content_header d-flex flex-column">
                        <small className='float-end'>
                            {usdPrice} USD
                          </small>
                        {/* <form className="d-flex my-2 g-20">
                           
                         


                            <input
                                        name="amount"
                                        rules={{required: true,}}
                                        defaultValue=""
                                        className='field field--outline w-100'
                                        placeholder={`Amount of ETH`}
                                        onChange={(e)=>{setPrice(e.target.value)}}
                                        value={price}
                                        required
                                       />

                                       
                        </form> */}
            </div>

            {/* <div className="content_main d-flex flex-column">
               
                <p className="row d-flex justify-content-between my-2">
                    Service fee: <span className="text-bold text-light">{fee} ETH</span>
                </p>
               
            </div> */}
            {/* <div className="content_footer d-flex flex-column g-20"> */}
                {/* <GradientBtn tag="button"  onClick={SendTransaction}></GradientBtn> */}
                <Link to ="/dashboard/withdraw-manual" className="btn btn--outline">
                <button >
                    Withdraw manually
                </button>
                </Link>
                
            {/* </div> */}
            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

                   
                    </>
                
    )
}

export default Withdraw