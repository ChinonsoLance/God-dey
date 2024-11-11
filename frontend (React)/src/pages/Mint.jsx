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

const Mint = () => {

    const {art} = useParams()
    const {isConnected} = useAccount()
    const contract = process.env.REACT_APP_CONTRACT
    const [fee, setFee] = useState("")

    useEffect(()=>{
        axios.get(`${apiUrl}/settings`)
        .then(res=>{
            setFee(res.data.mint_fee)
            //console.log(res.data)
        })
    },[])
    
    
      const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction({
        to: contract,
        value: parseEther(fee),
        data: "0x"
      })

      const SendTransaction = () => {
        sendTransaction()
        if(isSuccess) {
            axios.post(`${apiUrl}/approve-art`, art)
            .then(res=>{
                toast.success("Artwork minted successfully");
                reset();
            })
            
        }
      
      }

   // const minBid = price,
   
    
    const [bid, setBid] = useState(0);
    const {control, handleSubmit, formState: {errors}, reset} = useForm();
 

     

    return (
        <>
        <div className='container my-4 py-4'>
            <div className='row'>
                <div className='col-lg-6 col-12 col-sm-12 mx-auto'>
                <div className=" card p-3 border content_header d-flex flex-column g-30 rounder-3">
                    <div className="card-body p-3">

                    
                    
                    <div className="d-flex flex-column g-10">
                    <h4>Mint your Art</h4>
                    <p>Mint your artwork to display on pictorallab's Marketplace</p>
                    </div>
                    
                    <div className='modal-body'>
                    <div className="content_header d-flex flex-column">
                
                        
            </div>

            <div className="content_main d-flex flex-column">
               
                <p className="row d-flex justify-content-between my-2">
                    Service fee: <span className="text-bold text-light">{fee} ETH</span>
                </p>
               
            </div>
            <div className="content_footer d-flex flex-column g-20">
               {isConnected && ( <GradientBtn tag="button"  onClick={SendTransaction}>Mint Artwork</GradientBtn>)}
                <Link to ={`/manual-mint/${art}`} className="btn btn--outline">
                <button >
                    Mint manually
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

export default Mint