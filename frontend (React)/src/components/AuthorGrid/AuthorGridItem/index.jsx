// styling
import styles from './style.module.scss';

// components
import LazyImage from '@components/LazyImage';
import {NavLink} from 'react-router-dom';
import Countdown from 'react-countdown';
import Avatar from '@ui/Avatar';
import Like from '@ui/Like';
import Spring from '@components/Spring';
import BidModal from '@components/newBidModal';
// utils
import dayjs from 'dayjs';

// hooks
import {useBidModalContext} from '@contexts/bidModalContext';
const apiUrl = process.env.REACT_APP_API_URL




const AuthorGridItem = ({item, isPrivate, index}) => {
    const {name, price, image, author, qty, available, hot, likes, isLiked, file, id} = item;
    const {openBidModal} = useBidModalContext(price);

    return (
        <>
        
        <Spring index={index}>
            <div className={`${styles.wrapper} border-hover bg-primary`}>
                <div className="author d-flex align-items-center g-10">
                   
                </div>
                <div className={`${styles.media} square border-10`}>
                    <LazyImage src={`${apiUrl}/${file}`} alt={name} />
                </div>
                <div className={styles.main}>
                    <div className="d-flex align-items-center justify-content-between g-10">
                        <NavLink className="h6 text-overflow link-hover" to={`/explore/item/${id}`}>
                            {name}
                        </NavLink>
                        <button aria-label="Menu">
                            <i className="icon icon-ellipsis"></i>
                        </button>
                    </div>
                    <div className={`${styles.main_price} text-sm text-bold`}>
                        <div className="d-flex g-10">
                            <span>{price} ETH</span>
                            
                        </div>
                       
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className={`${styles.main_btn} text-accent text-sm link-hover link-hover--invert`}
                                onClick={openBidModal}>
                            { 'Buy now' }
                        </button>
                       
                    </div>
                </div>
            </div>
        </Spring>
        </>
    )
}

export default AuthorGridItem