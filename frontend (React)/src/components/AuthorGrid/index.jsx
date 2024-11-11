// styling
import styles from './style.module.scss';


// components
import AuthorGridItem from './AuthorGridItem';

// data placeholder
import all_items from '@db/all_items';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const apiUrl = process.env.REACT_APP_API_URL
const AuthorGrid = ({variant, items = all_items, isPrivate = false, className}) => {
    const [arts, setArts] = useState([])
    const {address} = useParams()
    useEffect(()=>{
        axios.get(`${apiUrl}/get-user-arts?address=${address}`)
        .then((res)=>{
            setArts(res.data)
            //console.log(res.data)
        })
    },[])
    const data = variant === 'preview' ? items.slice(0, 8) : items;

    return (
        <div className={`${styles.grid} ${className ? className : ''} items-grid`} id="items">
            {
                arts.map((item, index) => (
                    <AuthorGridItem key={item.id} item={item} index={index} isPrivate={isPrivate} />
                ))
            }
        </div>
    )
}

export default AuthorGrid