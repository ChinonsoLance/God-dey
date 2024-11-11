// components
import Title from '@components/Title';
import SimplePageHeader from '@components/SimplePageHeader';

import gridStyle from './style.module.scss'
// components
import LazyImage from '@components/LazyImage';
import {NavLink} from 'react-router-dom';
import Countdown from 'react-countdown';
import Avatar from '@ui/Avatar';
import Like from '@ui/Like';
import Spring from '@components/Spring';
import { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
    wrapper: {
        padding: "10px 20px 20px"
    },
    
    media: {
        margin: "10px 0 20px",
        position: "relative"
    },
    main_price: {
        margin: "7px 0 10px",
        display: "flex",
        justifyContent: "space-between",
    },
    
    main_btn :{
        fontFamily: "var(--heading-font)",
        fontWeight: 600
    }
    }

const apiUrl = process.env.REACT_APP_API_URL

const Explore = () => {

    const [datas, setDatas] = useState([])
    useEffect(()=>{
        axios.get(`${apiUrl}/explore`)
        .then(res=>{
            console.log(res.data)
            setDatas(res.data)
        })
    },[])
    return (
        <>
            <Title title="Explore" />
            <SimplePageHeader title="Explore" />
            <main className='container'>
            <div className='row'>
            {
                datas.map((data, index)=>{
                    return(
                        <>
                                <Spring index={index} className={`col-lg-3 col-12 `}>
                                    <div className={`${styles.wrapper} border-hover bg-primary p-2 my-2`}>
                                        <div className="author d-flex align-items-center g-10">
                                            <Avatar src={`${apiUrl}/${data.image}`} alt={data.username} size="xs" isVerified={true} />
                                            <NavLink className="text-sm text-bold text-light link-hover link-hover--invert"
                                                to={`/author/${data.wallet}`}
                                                style={{pointerEvents:  'none' }}>
                                                @{data.username}
                                            </NavLink>
                                        </div>
                                        <div className={`${styles.media} square border-10`}>
                                            <LazyImage src={`${apiUrl}/${data.file}`} alt={data.name} />
                                        </div>
                                        <div className={styles.main}>
                                            <div className="d-flex align-items-center justify-content-between g-10">
                                                <NavLink className="h6 text-overflow link-hover" to={`/explore/item/${data.id}`}>
                                                    {data.name}
                                                </NavLink>
                                                <button aria-label="Menu">
                                                    <i className="icon icon-ellipsis"></i>
                                                </button>
                                            </div>
                                            <div className={`${styles.main_price} text-sm text-bold`}>
                                                <div className="d-flex g-10">
                                                    <span>{data.price} ETH</span>
                                                
                                                </div>
                                            
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <button className={`${styles.main_btn} text-accent text-sm link-hover link-hover--invert`}
                                                    >
                                                    Buy now
                                                </button>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </Spring>
                        </>
                    )
                })
            }
            </div>
            </main>
        </>
    )
}

export default Explore