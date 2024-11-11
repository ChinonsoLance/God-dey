import React, {useState} from 'react'
import GradientBtn from '@ui/GradientBtn'
import { NavLink } from 'react-router-dom'
import styles from './style.module.scss';
import axios from 'axios';
import { ReactSession } from 'react-client-session';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL


const UserLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLogged, setIsLogged] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }

        axios.post(`${apiUrl}/login`, data,
        {headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        )
        .then((res)=>{
            if(res.data.loggedIn == true){
                Swal.fire('Great','Login Successful. Redirecting...','success')
                .then(()=>{
                    ReactSession.setStoreType("sessionStorage")
                
                    ReactSession.set("loggedIn", true)
                    ReactSession.set("wallet", res.data.wallet)
                    navigate('/dashboard')
                })
            }
            else{
                Swal.fire('Oops',`${res.data.message}`,'error')
            }
            console.log(res.data)
        })

    }
  return (
    <div className={`${styles.container} border-10`}>
            <div className={styles.main}>
                <h3>Login to your Account</h3>
              
                <div className={styles.main_form}>
                  
                    <form className="main_form-form d-flex flex-column g-20" onSubmit={handleSubmit} encType='multipart/form-data'>
                        
                               
                                <input className="field field--outline"
                                    type="text"
                                    id="email"
                                    placeholder="Email Address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    />
                          

                        <input className="field field--outline"
                               type="password"
                               placeholder="Enter Password"
                               onChange={(e) => setPassword(e.target.value)}
                               value={password}
                               />
                      

                        <GradientBtn className={styles.btn} tag="button" type="submit">Login</GradientBtn>
                    </form>
                  
                </div>
            </div>
          
        </div>
  )
}

export default UserLogin