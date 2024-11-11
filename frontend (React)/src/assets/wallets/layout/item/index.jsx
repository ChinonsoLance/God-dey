// styling
import styles from './style.module.scss';

// components
import ZoomViewer from '@components/ZoomViewer';
import StyledTabs from '@ui/StyledTabs';
import Avatar from '@ui/Avatar';
import GradientBtn from '@ui/GradientBtn';
import Like from '@ui/Like';
import BidsHistory from '@components/BidsHistory';
import Countdown from 'react-countdown';
import Sticky from 'react-stickynode';

// hooks
import {useBidModalContext} from '@contexts/bidModalContext';
import {useRef} from 'react';
import {useWindowSize} from 'react-use';
import { useParams } from 'react-router-dom';
// utils
import dayjs from 'dayjs';
import axios from 'axios';
import { useEffect, useState } from 'react';
// assets
import product from '@assets/item/item.webp';
import productZoom from '@assets/item/item_lg.webp';
import creator from '@assets/item/creator.webp';
import collection from '@assets/item/collection.webp';

// data placeholder
import item from '@db/item';
import { NavLink } from 'react-router-dom';
import {toast} from 'react-toastify';
const apiUrl = process.env.REACT_APP_API_URL

const Table = (props) => {

   
    return (
        <table className={styles.table}>
            <tbody>
            <tr>
                <td className="text-bold text-accent">Owner</td>
                <td className="text-overflow">{props.owner}</td>
            </tr>
           
            <tr>
                <td className="text-bold text-accent">Blockchain</td>
                <td className="text-overflow">Ethereum</td>
            </tr>
            <tr>
                <td className="text-bold text-accent">Category</td>
                <td className="text-overflow">{item.details.category}</td>
            </tr>
            </tbody>
        </table>
    )
}

const ItemDetails = () => {

    const {art} = useParams()
    const [thisArt, setArt] = useState({})

    useEffect(()=>{
        axios.get(`${apiUrl}/get-art?id=${art}`)
        .then((res)=>{
            console.log(res.data)
            setArt(res.data)
        })
    },[])

    const handleUrl = () => {
        navigator.clipboard.writeText(`${process.env.REACT_APP_URL}/explore/item/${art}`)
        toast.success('Copied to clipboard');
    }

    const {openBidModal} = useBidModalContext();
    const activeBids = item.bids.filter(item => item.active), prevBids = item.bids.filter(item => !item.active);
    const date = useRef(dayjs().add(7, 'days').toDate());
    const isSticky = useWindowSize().width >= 768;

    const tabs = [
        {label: 'Details', key: 'item-3', children: <Table owner={thisArt.username}/>},
    ];

    return (
        <section className={styles.details}>
            <div className={`${styles.details_container} container`}>
                <Sticky enabled={isSticky} top={60} bottomBoundary="#item_main">
                    <div className="media square border-10">
                        <ZoomViewer originalImg={`${apiUrl}/${thisArt.file}`} zoomedImg={`${apiUrl}/${thisArt.file}`} alt="Logical impact"/>
                    </div>
                </Sticky>
                <div className={styles.main} id="item_main">
                    <div className={styles.main_about}>
                        <div className="d-flex flex-column g-10">
                            
                            <h2 className={styles.title}>{thisArt.name}</h2>
                            <div className={styles.bid}>
                                <div className="d-flex g-10">
                                    On sale for <span className="text-light text-bold">{thisArt.price} ETH</span>
                                </div>
                               
                            </div>
                        </div>
                        <div className={styles.actions}>
                           
                            <button className={`${styles.btn} btn btn--icon`} aria-label="Menu" onClick={handleUrl}>
                                <i className="icon icon-share"/>
                            </button>
                        </div>
                    </div>
                    <p className={`${styles.main_text} text-sm`}>
                        {thisArt.description}
                    </p>
                    <div className={styles.main_creator}>
                        <div className={`${styles.block} border-10`}>
                            <div className={styles.block_details}>
                                <span className="text-xs">
                                    <span className="text-bold">Creator: </span>
                                    
                                </span>
                                <span className="text-sm text-bold text-light">{thisArt.owner}</span>
                            </div>
                        </div>
                        <div className={`${styles.block} border-10`}>
                            <Avatar src={`${apiUrl}/${thisArt.image}`} alt="3D Collections" size="sm"/>
                            <div className={styles.block_details} isVerified>
                                <span className="text-xs text-bold">Owner</span>
                                <span className="text-sm text-bold text-light text-overflow">
                                   <NavLink to={`/author/${thisArt.address}`}> @{thisArt.username}</NavLink>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className="main_tabs">
                        <StyledTabs tabs={tabs}/>
                        <div className={styles.buttons}>
                            <NavLink to={`/bid/${art}`}>
                            <GradientBtn tag="button" className='w-100'>
                                Buy for {thisArt.price} ETH
                            </GradientBtn>
                            </NavLink>
                            <NavLink to={'/explore'} className="w-100">
                            <button className="btn btn--outline w-100">Explore Other Arts</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemDetails