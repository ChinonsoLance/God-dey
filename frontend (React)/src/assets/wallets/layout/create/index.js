// styling
import styles from './style.module.scss';

// components
import LazyImage from '@components/LazyImage';
import Checkbox from '@ui/Checkbox';
import GradientBtn from '@ui/GradientBtn';
import {LoginSocialGoogle, LoginSocialFacebook} from 'reactjs-social-login';
import {toast} from 'react-toastify';
import CustomSelect from '@ui/CustomSelect';
import Avatar from '@ui/Avatar';
import useFileReader from '@hooks/useFileReader';
import StyledProgress from '@ui/StyledProgress';
import { NavLink } from 'react-router-dom';

// hooks
import {useAuth} from '@contexts/authContext';
import {useNavigate} from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

// assets
import google from '@assets/google.svg';
import facebook from '@assets/facebook.svg';
import login from '@assets/login.webp';
import avatar from '@assets/avatar.webp';
import placeholder from '@assets/avatar_placeholder.webp';
import { ReactSession } from 'react-client-session';
import { useAccount } from 'wagmi';
import axios from 'axios';
import Swal from 'sweetalert2';

ReactSession.setStoreType("sessionStorage")
const SORTING_OPTIONS = [
    {value: 'new deposit', label: 'New deposit'},
]
const apiUrl = process.env.REACT_APP_API_URL


const Create = ({setIsModalVisible}) => {
    
console.log("working")
    const [isLogged, setIsLogged] = useState(ReactSession.get("loggedIn"))
    const [walletAddress, setWalletAddress] = useState(ReactSession.get("wallet"))

    const {isConnected, address } = useAccount()
    const navigate = useNavigate();
   
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [size, setSize] = useState("")
    const [selectedFile, setSelectedFile] = useState("")
    const [description, setDescription] = useState("")


    console.log("logged? ",isLogged)
    //const {setIsLogged} = useAuth();
    

    const handleDelete = () => {
        setSelectedFile(placeholder);
        toast.info('Your Art was removed.');
    }

    
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    toast.success("File has been set")
  };


  useEffect( ()=> {
    if(!isConnected) {
        setIsLogged(ReactSession.get("loggedIn"))
        if(isLogged){
            setWalletAddress(ReactSession.get("wallet"))
        }
    }
},[])


    const inputRef = useRef(null);

    const handleUpload = () => document.getElementById("fileToUpload").click()

    const triggerInput = () => {inputRef.current?.click();}

    const handleModal = e => {
        e.preventDefault();
        setIsModalVisible(true);
    }

    const handleReject = (err) => {
        toast.error(err);
    }

    const handleResolve = () => {
        setIsLogged(true);
        navigate('/profile');
    }

    const handleSubmit = () => {
        let fd = new FormData()
        //let fileToUpload = document.getElementById("fileToUpload").files[0];
       // setFile(file)

       fd.append('image', selectedFile);
        fd.append('name', name);
        fd.append('description', description);
        fd.append('file', selectedFile);
        if(isConnected){
            fd.append('address', address);
        }
        if(isLogged){
            fd.append('address', walletAddress);
        }
        
        fd.append('size', size);
        fd.append('price', price);


       

        

       
        //fd.append("fileToUpload",fileToUpload)
        //console.log(fd)
        axios.post(`${apiUrl}/create`,
         fd,
         {headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res)=>{
            
            console.log((res))
            let success = res.data.success
            let message = res.data.message
            let artId = res.data.id
            
            if(success){
                Swal.fire("Great", `${message}`,"success")
                .then(()=>{
                    navigate(`/mint/${artId}`)
                })
            }
            else{
                Swal.fire("Oops!", `${message}`, "error")
                //console.log(res)
            }
        })
        .catch(err=>{
            console.error(err)
        })

        
    }

    return (
        <div className={`${styles.container} border-10`}>
            <div className={styles.main}>
                <h3>Create Artwork (NFT)</h3>
                <div className={styles.main_socials}>
                   
                   
                </div>
                <div className={styles.main_form}>
                    <span className="main_form-title text-light text-bold">Complete the fields to create your art</span>
                  {(isConnected || isLogged) && (  <form className="main_form-form d-flex flex-column g-20" method='post' enctype="multipart/form-data">
                        <input className="field field--outline"
                               type="text"
                               placeholder="Name of Art"
                               id='name'
                               onChange={(e)=>setName(e.target.value)}
                               
                               />
                        <input className="field field--outline"
                               type="number"
                               placeholder="Price"
                               autoComplete="price"
                               id='price'
                               onChange={(e)=>setPrice(e.target.value)}
                               />

                                <input className="field field--outline"
                               type="text"
                               placeholder="Size (60 x 60)"
                               autoComplete="size"
                               id='size'
                               onChange={(e)=>setSize(e.target.value)}
                               />

                            <input className="field field--outline"
                               type="text"
                               placeholder="Describe your Art"
                               autoComplete="description"
                               id='description'
                               onChange={(e)=>setDescription(e.target.value)}
                               />

                               
                               
                               <div className={`${styles.wrapper} bg-secondary border-10`}>
                                <div className={styles.content}>
                                    <div className={styles.content_avatar}>
                                       
                                    </div>
                                    <div className="d-flex flex-column g-20">
                                        <GradientBtn tag="button" type="button" onClick={handleUpload}>Upload photo</GradientBtn>
                                        <button className="btn btn--outline btn-sm" onClick={handleDelete} disabled={selectedFile === placeholder}>
                                            Delete
                                        </button>
                                    </div>
                                    <input id='fileToUpload' accept='image/*' type="file" ref={inputRef} onChange={handleFileChange} hidden/>
                                </div>
                            </div>
                        <div className="d-flex flex-wrap g-15 align-items-center justify-content-between">
                            <div className="d-flex align-items-center g-10 text-light text-sm">
                               
                            </div>
                           
                        </div>
                        <GradientBtn className={styles.btn} tag="button" type="button" onClick={handleSubmit}>Create NFT</GradientBtn>
                    </form>) || (
                             <div className="d-flex flex-column g-15">
                             <p><b>Please Login to pictorallab to view this page</b></p>
                             <NavLink to="/connect-wallet">
                             <GradientBtn>
                                Login to pictorallab
                             </GradientBtn>
                             </NavLink>
                             
                             
                             </div>
                    )}
                </div>
            </div>
            <div className={`${styles.media} border-10`}>
                <LazyImage className={styles.media_img} src={login} alt="media"/>
            </div>
        </div>
    )
}

export default Create