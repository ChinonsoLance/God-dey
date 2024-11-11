// styling
import styles from './style.module.scss';

// components
import Avatar from '@ui/Avatar';
import GradientBtn from '@ui/GradientBtn';
import StyledProgress from '@ui/StyledProgress';
import {toast} from 'react-toastify';

// hooks
import {useRef} from 'react';
import useFileReader from '@hooks/useFileReader';

// assets

import placeholder from '@assets/avatar_placeholder.webp';

import { useAccount } from 'wagmi';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const apiUrl = process.env.REACT_APP_API_URL
const avatar = process.env.REACT_APP_DEFAULT_PROFILE
//console.log(process.env.REACT_APP_DEFAULT_PROFILE)


const AvatarUpload = () => {

    ReactSession.setStoreType("sessionStorage")
    const {isConnected, address} = useAccount()
    const navigate = useNavigate()
    const [photo, setPhoto] = useState("")

    const [isLogged, setIsLogged] = useState(ReactSession.get("loggedIn"))
    const [walletAddress, setWalletAddress] = useState(ReactSession.get("wallet"))

   
        useEffect(()=>{
            if(isConnected){
                axios.get(`${apiUrl}/get-user-by-id?id=${address}`)
                .then((res)=>{
                    const image = `${apiUrl}/${res.data.image}`
                    setFile(image)
                    setPhoto(image)
                   // console.log(res.data)
                })
            }
            
        },[])
    
    
        useEffect(()=>{
            if(isLogged){
                axios.get(`${apiUrl}/get-user-by-id?id=${walletAddress}`)
                .then((res)=>{
                    const image = `${apiUrl}/${res.data.image}`
                    setFile(image)
                    setPhoto(image)
                   // console.log(res.data)
                })
            }
            
        },[])
    

    
   

    const {file, setFile, handleFile, loading} = useFileReader();
    const inputRef = useRef(null);
   
   

    const triggerInput = () => inputRef.current?.click();

    const handleDelete = () => {
        setFile(placeholder);
        toast.info('Your profile picture was successfully deleted.');
    }

   

    const handleFileInput = (e) => {
        //handleFile()
        setPhoto(e.target.files[0])
        console.log(e.target.files[0])
        //console.log("working",photo)
        let fd = new FormData()
        fd.append("image", e.target.files[0])
        isConnected &&(fd.append("address", address)) || (fd.append("address", walletAddress))

        axios.post(`${apiUrl}/update-photo`,fd, {headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res)=>{
            Swal.fire("Great","Profile Photo Updated", "success")
            .then(()=>{
                navigate(0)
            })
        })

    }

    return (
        <>
        {(isConnected || isLogged)&& (<div className={`${styles.wrapper} bg-secondary border-10`}>
            <div className={styles.content}>
                <div className={styles.content_avatar}>
                    <Avatar className={styles.container} src={file ? file : avatar} alt="avatar"/>
                    {loading && <StyledProgress visible isOverlay isRound />}
                </div>
                <div className="d-flex flex-column g-20">
                    <GradientBtn tag="button" onClick={triggerInput}>Upload photo</GradientBtn>
                    {/* <button className="btn btn--outline" onClick={handleDelete} disabled={file === placeholder}>
                        Delete
                    </button> */}
                </div>
                <input type="file" ref={inputRef} onChange={handleFileInput} hidden/>
            </div>
        </div>
       
        )}
         </>
    )
}

export default AvatarUpload