// GA
import ReactGA from 'react-ga4';



// styling
import './style.scss';
import '@styles/style.css'

// libs styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'react-toastify/dist/ReactToastify.css';


// utils
import {lazy, Suspense} from 'react';
import {preventDefault} from '@utils/helpers';

// hooks
import Create from '@pages/Create';
import BidModal from '@components/newBidModal';
import Bid from '@pages/bid';
import Transfer from '@pages/Transfer';
import Mint from '@pages/Mint';
import ManualMint from '@pages/ManualMint';
import Privacy from '@pages/Policy/privacy';
import Terms from '@pages/Policy/terms';
import Fund from '@pages/Fund';
import ManualFund from '@pages/ManualFund';
import Withdraw from '@pages/Withdraw';
import ManualWithdraw from '@pages/ManualWithdraw';
import UserLogin from '@pages/UserLogin';
import ManualBid from '@pages/BidManually';


// pages
const Home = lazy(() => import('@pages/Home'));
const Home2 = lazy(() => import('@pages/Home2'));
const Explore = lazy(() => import('@pages/Explore'));
const ExploreGrid = lazy(() => import('@pages/ExploreGrid'));
const Item = lazy(() => import('@pages/Item'));
const Author = lazy(() => import('@pages/Author'));
const Profile = lazy(() => import('@pages/Profile'));
const Dashboard = lazy(() => import('@pages/Dashboard'));
const FAQ = lazy(() => import('@pages/FAQ'));
const Ranking = lazy(() => import('@pages/Ranking'));
const Activity = lazy(() => import('@pages/Activity'));
const ConnectWallet = lazy(() => import('@pages/ConnectWallet'));
const Login = lazy(() => import('@pages/Login'));
const About = lazy(() => import('@pages/About'));
const Team = lazy(() => import('@pages/Team'));
const BlogSidebar = lazy(() => import('@pages/BlogSidebar'));
const BlogGrid = lazy(() => import('@pages/BlogGrid'));
const Post = lazy(() => import('@pages/Post'));
const Contacts = lazy(() => import('@pages/Contacts'));
const PageNotFound = lazy(() => import('@pages/PageNotFound'));

const App = () => {
    
    useEffect(() => {
        preventDefault();
    }, []);

    const gaKey = process.env.REACT_APP_PUBLIC_GA;
    gaKey && ReactGA.initialize(gaKey);

    return (
        
    

        <AuthAPI>
            <BidModalContextAPI>
                <SidebarContextAPI>
                    <ScrollToTop/>
                    <AppLayout>
                        <Suspense fallback={<LoadingScreen visible/>}>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/index2" element={<Home2/>}/>
                                <Route path="/explore" element={<Explore/>}/>
                                <Route path="/explore-grid" element={<ExploreGrid/>}/>
                                <Route path="/explore/item/:art" element={<Item/>}/>
                                <Route path="/author/:address" element={<Author/>}/>
                                <Route path="/profile" element={<Profile/>}/>
                                <Route path="/faq" element={<FAQ/>}/>
                                <Route path="/ranking" element={<Ranking/>}/>
                                <Route path="/activity" element={<Activity/>}/>
                                <Route path="/connect-wallet" element={<ConnectWallet/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/team" element={<Team/>}/>
                                <Route path="/blog-sidebar" element={<BlogSidebar/>}/>
                                <Route path="/blog-grid" element={<BlogGrid/>}/>
                                <Route path="/post" element={<Post/>}/>
                                <Route path="/contacts" element={<Contacts/>}/>
                                <Route path="/mint/:art" element={<Mint/>}/>
                                <Route path="/manual-mint/:art" element={<ManualMint/>}/>
                                <Route path="/create" element={<Create/>}/>
                                <Route path='/dashboard' element={<Dashboard/>}/>
                                <Route path='/dashboard/transfer' element={<Transfer/>}/>
                                <Route path='/dashboard/withdraw' element={<Withdraw/>}/>
                                <Route path='/bid/:art' element={<Bid/>}/>
                                <Route path='/privacy' element={<Privacy/>} />
                                <Route path='/terms' element={<Terms/>} />
                                <Route path='/dashboard/fund' element={<Fund/>} />
                                <Route path='/dashboard/fund-manual' element={<ManualFund/>} />
                                <Route path='/dashboard/withdraw-manual' element={<ManualWithdraw/>} />
                                <Route path='/manual-login' element={<UserLogin/>} />
                                <Route path='/manual-bid/:art' element={<ManualBid/>} />
                                <Route path="*" element={<PageNotFound/>}/>
                            </Routes>
                        </Suspense>
                    </AppLayout>
                </SidebarContextAPI>
            </BidModalContextAPI>
        </AuthAPI>
        
    )
}

export default App
