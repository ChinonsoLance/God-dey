// styled components
import {StyledAuthorItems, CollectionsGrid} from './style';

// components
import StyledTabs from '@ui/StyledTabs';
import ItemsGrid from '@components/ItemsGrid';
import Pagination from '@ui/Pagination';
import CollectionItem from '@components/CollectionItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// hooks
import usePagination from '@hooks/usePagination';

// data placeholder
import author from '@db/author';
import axios from 'axios';
import AuthorGrid from '@components/AuthorGrid';


const apiUrl = process.env.REACT_APP_API_URL;
const SingleItems = ({content}) => {
    const pagination = usePagination(content, 12);

    return (
        <div className="tab-content" ref={pagination.containerRef}>
            <ItemsGrid items={pagination.currentItems()} isPrivate />
            {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
        </div>
    )
}

const Collections = ({content}) => {
    const pagination = usePagination(content, 6);

    return (
        <div className="tab-content" ref={pagination.containerRef}>
            <CollectionsGrid>
                {
                    pagination.currentItems().map((item, index) => (
                        <CollectionItem item={item} index={index} key={index} isPrivate />
                    ))
                }
            </CollectionsGrid>
            {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
        </div>
    )
}

const AuthorItems = () => {
    const {address} = useParams()
    const [arts, setArts] = useState([])
    useEffect(()=>{
        axios.get(`${apiUrl}/get-user-arts?address=${address}`)
        .then((res)=>{
            setArts(res.data)
            //console.log(res.data)
        })
    },[])
   // const likedItems = author.creations.filter(item => item.isLiked);

    const tabs = [
        {label: `Creations (${arts.length})`, key: 'item-1', children: <SingleItems content={arts} />},
    ];

    return (
        <StyledAuthorItems>
            <div className="container">
               <AuthorGrid item={arts}/>
            </div>
        </StyledAuthorItems>
    )
}

export default AuthorItems