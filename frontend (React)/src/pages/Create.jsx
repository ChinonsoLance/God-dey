// utils
import {lazy} from 'react';

// hooks
import {useState} from 'react';
import { useAccount } from 'wagmi';
// components
import Title from '@components/Title';
import SimplePageHeader from '@components/SimplePageHeader';
import LoginForm from '@layout/login/LoginForm';
import Create from '@layout/create';
import { NavLink } from 'react-router-dom';
import GradientBtn from '@ui/GradientBtn';
import { ReactSession } from 'react-client-session';

const PasswordReminder = lazy(() => import('@layout/login/PasswordReminder'));

ReactSession.setStoreType("sessionStorage")


const CreateArt = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {isConnected, address} = useAccount()
    const [isLogged, setIsLogged] = useState(ReactSession.get("loggedIn"))
    const [walletAddress, setWalletAddress] = useState(ReactSession.get("wallet"))

    return (
        <>
            <Title title="Create Artwork"/>
            <SimplePageHeader title="Create your Art"/>
            <main>
                <div className="section mt-0">
                    <div className="container">
                        {(isConnected || isLogged) && (<Create setIsModalVisible={setIsModalVisible}/>)
                        ||
                        (
                            <>
                           
                                <b>
                                    Please Login to view this page
                                </b>
                                <div className='col-lg-6'>
                                <p>
                                <NavLink to="/connect-wallet">
                                    <GradientBtn>
                                       Login to pictorallab
                                    </GradientBtn>
                                </NavLink>
                                </p>
                                </div>
                               
                           
                            </>
                        )
                        }
                    </div>
                </div>
            </main>
            <PasswordReminder isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
        </>
    );
}

export default CreateArt