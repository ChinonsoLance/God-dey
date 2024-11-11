// styling
import styles from './style.module.scss';

// components
import LazyImage from '@components/LazyImage';
import Checkbox from '@ui/Checkbox';
import GradientBtn from '@ui/GradientBtn';
import {LoginSocialGoogle, LoginSocialFacebook} from 'reactjs-social-login';
import {toast} from 'react-toastify';
import CustomSelect from '@ui/CustomSelect';
import axios from 'axios';

// hooks
import {useAuth} from '@contexts/authContext';
import {NavLink, useNavigate} from 'react-router-dom';

// assets
import google from '@assets/google.svg';
import facebook from '@assets/facebook.svg';
import login from '@assets/login.webp';
import { useAccount } from 'wagmi';
import { useState } from 'react';
import Swal from 'sweetalert2';

const SOCIAL_PROFILES = [
    {value: 'instagram', label: 'Instagram'},
    {value: 'facebook', label: 'Facebook'},
    {value: 'twitter', label: 'Twitter'},
    {value: 'pinterest', label: 'Pinterest'},
   ];

const apiUrl = process.env.REACT_APP_API_URL

const LoginForm = ({setIsModalVisible}) => {
    const {setIsLogged} = useAuth();
    const navigate = useNavigate();
    const {isConnected, address} = useAccount()

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [uname, setUname] = useState("")
    const [email, setEmail] = useState("")
    const [url, setUrl] = useState("")
    const [social, setSocial] = useState("")
    const [image, setImage] = useState("")
    const [password, setPassword]  = useState("")
    const [wallet, setWallet] = useState("")
    

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let fd = new FormData()

        fd.append("fname", fname)
        fd.append("lname", lname)
        fd.append("uname", uname)
        fd.append("url", url)
        isConnected &&(fd.append("address", address)) || (fd.append("address", wallet))
        
        fd.append("email", email)
        fd.append("password", password)
        fd.append("image", image)
        
        //console.log(data)

        axios.post(`${apiUrl}/register`,
         fd,
         {headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res)=>{
            //console.log(res.data)
            let success = res.data.success
            let message = res.data.message
            
            if(success){
                Swal.fire("Great", `${message}`,"success")
                .then(()=>{
                    navigate('/profile')
                })
            }
            else{
                Swal.fire("Oops!", `${message}`, "error")
            }
        })
        .catch(err=>{
            console.error(err)
        })

    }

    
    

    return (
        <div className={`${styles.container} border-10`}>
            <div className={styles.main}>
                <h3> Register your account</h3>
              
                <div className={styles.main_form}>
                   <p class="py-2"> <code><span className="main_form-title text-light text-bold">Your Address: {address}</span></code></p>
                   { (<form className="main_form-form d-flex flex-column g-20" onSubmit={handleSubmit} encType='multipart/form-data'>
                        
                               
                                <input className="field field--outline"
                                    type="text"
                                    id="fname"
                                    placeholder="First Name"
                                    onChange={(e) => setFname(e.target.value)}
                                    value={fname}
                                    />
                                
                               
                                <input className="field field--outline"
                                    type="text"
                                    id="lname"
                                    placeholder="Last Name"
                                    onChange={(e) => setLname(e.target.value)}
                                    value={lname}
                                    />

                                <input className="field field--outline"
                                    type="text"
                                    id="uname"
                                    placeholder="Username"
                                    onChange={(e) => setUname(e.target.value)}
                                    value={uname}
                                    />

                                <input className="field field--outline"
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                   
                                    />
                               
                       
                        <input className="field field--outline"
                               type="url"
                               placeholder="Enter Social Url"
                               onChange={(e) => setUrl(e.target.value)}
                               value={url}
                               />

                               {!isConnected && (
                                 <input className="field field--outline"
                                 type="text"
                                 placeholder="Enter Ethereum address"
                                 onChange={(e) => setWallet(e.target.value)}
                                 value={wallet}
                                 required
                                 />
                               )}

                        <input className="field field--outline"
                               type="password"
                               placeholder="Enter Password"
                               onChange={(e) => setPassword(e.target.value)}
                               value={password}
                               />
                                <div className='form-group w-100'>
                                    <label>
                                        Enter Profile Photo
                                    </label>
                                <input type="file" id="file" className='field field--outline' onChange={handleImage}/>
                                </div>
                              
                        <div className="d-flex flex-wrap g-15 align-items-center justify-content-between">
                            
                            <span className={`${styles.remind} text-sm text-warning`} >
                                Note: You will have to restart your previous action
                            </span>
                        </div>

                        <GradientBtn className={styles.btn} tag="button" type="submit">Complete Profile</GradientBtn>
                    </form>)
                    ||

                    (
                        <>
                        <p>
                            Login to view this page
                        </p>
                        <NavLink to="/connect-wallet">
                            <GradientBtn className={styles.btn} tag="button" type="submit">Connect wall</GradientBtn>
                        </NavLink>
                        </>
                    )
                    
                    }
                </div>
            </div>
            <div className={`${styles.media} border-10`}>
                <LazyImage className={styles.media_img} src={login} alt="media"/>
            </div>
        </div>
    )
} 

export default LoginForm