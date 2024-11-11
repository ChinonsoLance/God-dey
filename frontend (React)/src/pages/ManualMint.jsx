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

const ManualMint = () => {

    const {art} = useParams()
    
    const contract = process.env.REACT_APP_CONTRACT
    const [fee, setFee] = useState("")

    useEffect(()=>{
        axios.get(`${apiUrl}/settings`)
        .then(res=>{
            setFee(res.data.mint_fee)
            //console.log(res.data)
        })
    },[])
    
    
    
   // const minBid = price,
   
    
    const [bid, setBid] = useState(0);
    const {control, handleSubmit, formState: {errors}, reset} = useForm();

    
 
      const contractAddress = process.env.REACT_APP_CONTRACT

      const mint= (e) => {
        e.preventDefault();
        //console.log(art)
        axios.post(`${apiUrl}/manual-mint`,
          {art},
          {headers: {
            'Content-Type': 'multipart/form-data'
          }
        }

        )
        .then(res=>{
            console.log(res.data)
            if(res.data.success){
                console.log("minted")
                toast.success("Processing")
            }
        })
        .catch(err =>{
            console.log(err)
        })
      }
     

    return (
        <>
        <div className='container my-4 py-4'>
            <div className='row'>
                <div className=' col-12 col-sm-12 col-lg-6 mx-auto'>
                <div className=" card p-3 border content_header d-flex flex-column g-30 rounder-3">
                    <div className="card-body p-3">

                    
                    
                    <div className="d-flex flex-column g-10">
                    <h4>Mint your Art</h4>
                    <p>Make a deposit of <b>{fee} ETH</b> to the following address</p>
                    </div>
                    
                    <input className="field field--outline w-100"
                               type="text"
                               readOnly
                               value={contractAddress}
                               
                               />

                               <p className='text-center'>
                                Or scan the QR code below
                               </p>

                               <img src={`https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${contractAddress}`} style={{maxWidth: "200px"}}></img>
                               <hr/>
<br/>
                               <GradientBtn tag="button" onClick={mint}>
                                I have made this deposit
                               </GradientBtn>
                    </div>
                </div>
            </div>
        </div>
        </div>

                   
                    </>
                
    )
}

export default ManualMint