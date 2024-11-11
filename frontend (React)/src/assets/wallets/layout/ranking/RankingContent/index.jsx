// styling
import styles from './style.module.scss';

// hooks
import {useState} from 'react';
import {useWindowSize} from 'react-use';

// utils
import {lazy} from 'react';
// styling


// components

import Avatar from '@ui/Avatar';

import {NavLink} from 'react-router-dom';
import Spring from '@components/Spring';

// hooks


// utils
import {addZero} from '@utils/helpers';

// data placeholder
import sellers from '@db/sellers';

// constants
import {CollectionCell, FILTERS} from '@constants/ranking';
import axios from 'axios';
import { useEffect } from 'react';
// components
import CustomSelect from '@ui/CustomSelect';
const Table = lazy(() => import('../Table'));
const Accordion = lazy(() => import('../Accordion'));


const apiUrl = process.env.REACT_APP_API_URL

const RankingContent = () => {
    const [period, setPeriod] = useState(FILTERS.period[0]);
    const [category, setCategory] = useState(FILTERS.category[0]);
    const [type, setType] = useState(FILTERS.type[0]);
    const isAccordion = useWindowSize().width < 1024;
    const [datas, setDatas ]= useState([])

    useEffect(()=>{
        axios.get(`${apiUrl}/get-user-rank`)
        .then((res)=>{
            //console.log(res.data)
            setDatas(res.data)
        })
    },[])

    return (
        <div className="section mt-0">
            <div className="container d-grid g-30">
               
                {
                    datas.map((seller, index)=>{
                        return(
                            <>
                             <Spring key={index} index={index} type="fade" className={styles.grid}>
                                <div className={`${styles.seller} border-hover border-hover--horizontal bg-primary`}>
                                    <span className="seller_index text-sm">{addZero(index + 1)}</span>
                                    <Avatar src={`${apiUrl}/${seller.image}`} alt={seller.username} size="sm"
                                            isVerified={true}/>
                                    <div className="seller-info d-flex flex-column">
                                        <NavLink className="text-sm text-bold text-light text-overflow link-hover"
                                              to={`/author/${seller.address}`}>
                                            @{seller.username}
                                        </NavLink>
                                        <span className="text-sm">
                                            ${seller.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </span>
                                    </div>
                                </div>
                            </Spring>
                            </>
                        )
                    })

                    

                    // isAccordion ?
                    //     <Accordion period={period} category={category} type={type} />
                    //     :
                    //     <Table period={period} category={category} type={type} />
                }
            </div>
        </div>
    )
}

export default RankingContent