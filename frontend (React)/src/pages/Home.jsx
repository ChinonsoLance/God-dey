// utils
import {lazy} from 'react';

// components
import Title from '@components/Title';
import Hero from '@layout/home/Hero';
import ExploreGridContent from '@layout/explore-grid';
import Explore from './Explore';
const NotableDrops = lazy(() => import('@layout/home/NotableDrops'));
const BestSellers = lazy(() => import('@layout/home/BestSellers'));
const Browse = lazy(() => import('@layout/home/Browse'));
const CreateAndSell = lazy(() => import('@layout/home/CreateAndSell'));
const Presentation = lazy(() => import('@layout/home/Presentation'));
const Blog = lazy(() => import('@layout/home/Blog'));
const LiveAuctions = lazy(() => import('@layout/home2/LiveAuctions'));
const FeaturedCollections = lazy(() => import('@layout/home2/FeaturedCollections'));
const Features = lazy(() => import('@components/Features'));


const Home = () => {
    return (
        <>
            <Title title="Home"/>
            <main>
                <Hero/>
                <NotableDrops/>
                <Explore/>
                <BestSellers/>
                <Browse/>
                <LiveAuctions/>
                <FeaturedCollections/>
                <CreateAndSell/>
                {/* <Presentation/>
                <Blog/> */}
            </main>
        </>
    )
}

export default Home