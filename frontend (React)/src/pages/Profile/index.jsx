// styling
import styles from './style.module.scss';

// components
import Title from '@components/Title';
import SimplePageHeader from '@components/SimplePageHeader';
import AvatarUpload from '@layout/profile/AvatarUpload';
import ProfileDetails from '@layout/profile/ProfileDetails';
import { useAccount } from 'wagmi';
import GradientBtn from '@ui/GradientBtn';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    const {isConnected, address} = useAccount()
    return (
        <>
            <Title title="Profile"/>
            <SimplePageHeader title="Edit Profile"/>
            <main>
                <div className={`${styles.content} section`}>
                    <div className={`${styles.content_container} container`}>
                        
                        <>
                        <AvatarUpload />
                       
                        <ProfileDetails />
                        </>
                       
                    </div>
                </div>
            </main>
        </>
    );
}

export default Profile