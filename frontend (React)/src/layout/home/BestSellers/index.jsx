// styling
import styles from './style.module.scss';

// components
import SectionHeader from '@components/SectionHeader';
import Avatar from '@ui/Avatar';
import CustomSelect from '@ui/CustomSelect';
import {NavLink} from 'react-router-dom';
import Spring from '@components/Spring';
import { useEffect } from 'react';
// hooks
import {useState} from 'react';
import axios from 'axios';
// utils
import {addZero} from '@utils/helpers';

// data placeholder
import sellers from '@db/sellers';
const apiUrl = process.env.REACT_APP_API_URL

const BestSellers = () => {

    const [datas, setDatas] = useState([])

    useEffect(()=>{
        axios.get(`${apiUrl}/get-user-rank`)
        .then((res)=>{
            console.log(res.data)
            setDatas(res.data)
        })
    },[])



    const options = [
        {value: 'default', label: 'Default sorting'},
        {value: 'az', label: 'A - Z'},
        {value: 'za', label: 'Z - A'},
        {value: 'low', label: 'Highest income'},
        {value: 'high', label: 'Lowest income'}
    ];
    const [selected, setSelected] = useState(options[0]);

    const data = [...sellers].sort((a, b) => {
        switch (selected.value) {
            case 'az':
                return a.nickname.localeCompare(b.nickname);
            case 'za':
                return b.nickname.localeCompare(a.nickname);
            case 'low':
                return b.income - a.income;
            case 'high':
                return a.income - b.income;
            default:
                return a;
        }
    });

    return (
        <section>
            <div className="container">
                <SectionHeader title="Best Sellers">
                    <CustomSelect options={options} selected={selected} setSelected={setSelected}/>
                </SectionHeader>
                <div className={styles.grid}>
                    {
                        datas.map((seller, index) => (
                            <Spring key={index} index={index} type="fade">
                                <div className={`${styles.seller} border-hover border-hover--horizontal bg-primary`}>
                                    <span className="seller_index text-sm">{addZero(index + 1)}</span>
                                    <Avatar src={`${apiUrl}/${seller.image}`} alt={seller.username} size="sm"
                                            isVerified={seller.isVerified}/>
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
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BestSellers