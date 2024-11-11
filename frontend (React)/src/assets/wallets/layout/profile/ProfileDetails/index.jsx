// styling
import styles from './style.module.scss';
import { useState } from 'react';

// components
import LazyImage from '@components/LazyImage';
import {toast} from 'react-toastify';
import GradientBtn from '@ui/GradientBtn';
import StyledProgress from '@ui/StyledProgress';

// hooks
import {useRef, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import useFileReader from '@hooks/useFileReader';

// utils
import classNames from 'classnames';

// assets
import cover from '@assets/cover.webp';
import axios from 'axios';
import { useAccount } from 'wagmi';
import { NavLink } from 'react-router-dom';
import { ReactSession } from 'react-client-session';
ReactSession.setStoreType("sessionStorage")
const ProfileDetails = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {file, setFile, handleFile, loading} = useFileReader();
    const {isConnected, address}  = useAccount()
    const [isLogged, setIsLogged] = useState(ReactSession.get("loggedIn"))
    const [walletAddress, setWalletAddress] = useState(ReactSession.get("wallet"))
    const [isCompleted, setIsCompleted] = useState(false)
    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [bio, setBio] = useState("")
    const [url, setUrl] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    //console.log(walletAddress)

    useEffect(()=>{
        {
        isConnected && (axios.get(`${process.env.REACT_APP_API_URL}/get-user-by-id?id=${address}`)
        .then((res)=>{
            const user = res.data
            if(user.completed){
                setIsCompleted(true)
                setUsername(user.username)
                setFirstname(user.firstname)
                setLastname(user.lastname)
                setUrl(user.url)
                setBio(user.bio)
                setPhone(user.phone)
                setEmail(user.email)
    
                console.log(user)
            }
            
            
    
        }))
   
        isLogged && (
            axios.get(`${process.env.REACT_APP_API_URL}/get-user-by-id?id=${walletAddress}`)
        .then((res)=>{
            const user = res.data
            if(user.completed){
                setIsCompleted(true)
                setUsername(user.username)
                setFirstname(user.firstname)
                setLastname(user.lastname)
                setUrl(user.url)
                setBio(user.bio)
                setPhone(user.phone)
                setEmail(user.email)
    
                console.log(user)
            }
            
            
    
        })
        )
        
    }
}
    
    ,[])
   
    const inputRef = useRef(null);

    const triggerInput = () => inputRef.current?.click();

    const setPlaceholder = () => setFile(cover);

    const handleDelete = () => {
        setPlaceholder();
        toast.info('Cover photo was successfully deleted.');
    };

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            firstname,
            lastname,
            username,
            bio,
            url,
            phone,
            address
        }
        console.log(data)

        axios.post(`${process.env.REACT_APP_API_URL}/update-profile`, data,
        {headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res=>{
            console.log(res.data)
            let success = res.data.success
            let message = res.data.message
            if(success){
                toast.info('Profile details updated successfully!')
            }
            else{
                toast.error('An error occurred')
            }
        })
        
    }

    useEffect(() => {
        setPlaceholder();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
       
       { isCompleted && (<div className={`${styles.wrapper} border-10`}>
            <div className={`${styles.cover} border-10`}>
                <LazyImage className={styles.cover_bg} src={file ? file : cover} alt="cover"/>
                <span className={styles.cover_overlay}>
                    {/* <GradientBtn tag="button" onClick={triggerInput}>Upload cover</GradientBtn> */}
                    {
                        file !== cover && (
                            <button className="btn btn--outline btn--outline-dark" onClick={handleDelete}>
                                Delete
                            </button>
                        )
                    }
                </span>
                {loading && <StyledProgress visible isOverlay />}
            </div>
            <div className="d-flex flex-column g-20">
                <h5 >Personal Information</h5>
                <form className="d-flex flex-column g-40" onSubmit={onSubmit} method="post">
                    <div className="d-flex flex-column g-20">
                        <div className={styles.group}>
                            <input type="file" ref={inputRef} onChange={handleFile} hidden/>
                            <input className={classNames('field field--outline', {'field--error': errors.firstName})}
                                   type="text"
                                   defaultValue={firstname}
                                   placeholder="First name"
                                   {...register('firstName', {required: true})}
                                   onChange={(e)=>{setFirstname(e.target.value)}}
                                   />
                            <input className={classNames('field field--outline', {'field--error': errors.lastName})}
                                   type="text"
                                   defaultValue={lastname}
                                   placeholder="Last name"
                                   {...register('lastName', {required: true})}
                                   onChange={(e)=>{setLastname(e.target.value)}}
                                   />
                            <input className={classNames('field field--outline', {'field--error': errors.email})}
                                   type="email"
                                   placeholder="Email"
                                   defaultValue={email}
                                   {...register('email', {required: false, pattern: /^\S+@\S+$/i})}
                                   onChange={(e)=>{setEmail(e.target.value)}}
                                   readOnly
                                   />
                            <input className={classNames('field field--outline', {'field--error': errors.phone})}
                                   type="tel"
                                   placeholder="Phone number"
                                   defaultValue={phone}
                                   {...register('phone', {required: false})}
                                   onChange={(e)=>{setPhone(e.target.value)}}
                                   />
                        </div>
                        <input className={classNames('field field--outline', {'field--error': errors.url})}
                               type="text"
                               placeholder="Custom URL"
                               defaultValue={url}
                               onChange={(e)=>{setUrl(e.target.value)}}
                               {...register('url', {
                                   required: false,
                                   pattern: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
                               })} />
                        <textarea className={`${styles.textarea} field field--outline`} placeholder="Enter your bio"
                                  {...register('bio', {required: false})} 
                                  defaultValue={bio}
                                  onChange={(e)=>{setBio(e.target.value)}}
                                  />
                    </div>
                    <div className={styles.buttons}>
                        <GradientBtn tag="button" type="submit">Update profile</GradientBtn>
                        <input type='reset' className="btn btn--outline" value="Reset"/>
                    </div>
                </form>
            </div>
        </div>
        )
        ||

        (
            
                <>
               
                    <b>
                        Please complete your profile to view this page
                    </b>
                    <div className='col-lg-6'>
                    <p>
                    <NavLink to="/login">
                        <GradientBtn>
                        Create / Register your account
                        </GradientBtn>
                    </NavLink>
                    </p>
                    </div>
                   
               
                </>
            
        )}
        </>
    )
}

export default ProfileDetails