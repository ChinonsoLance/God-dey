// styling
import styles from './style.module.scss';

// components
import Logo from '@components/Logo';
import {NavLink} from 'react-router-dom';
import SubscribeForm from '@components/SubscribeForm';

// utils
import {memo} from 'react';

// hooks
import {useLocation} from 'react-router-dom';

// constants
import {FOOTER_LINKS, SOCIAL_LINKS} from '@constants/links';

const SocialLinks = () => {
    return SOCIAL_LINKS.map((link, index) => (
        <li key={index}>
            <a className="tile tile--filled" href={link.url} target="_blank" rel="noreferrer noopener" aria-label={link.name}>
                <i className={`icon icon-${link.icon}`}/>
            </a>
        </li>
    ))
}

const FooterNav = () => {
    const location = useLocation();

    return FOOTER_LINKS.map((item, index) => (
        <div className={styles.main_nav_item} key={index}>
            <h6>{item.title}</h6>
            <ul className="d-flex flex-column g-10">
                {
                    item.links.map((item, index) => (
                        <li className="text-bold text-sm" key={index}>
                            <NavLink to={item.url}
                                  className={location.pathname === item.url  ? styles.active : ''}>
                                {item.title}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    ))
}

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.main_block}>
                        <div className="d-flex flex-column g-20">
                            <h4>Stay in the loop</h4>
                            
                            <div className="yourLinksContainer">
    <a href="mailto:pictorallabrelations@gmail.com" target="_blank" rel="noreferrer noopener">
        Email
    </a>
    <br></br>
    
    <a href="https://t.me/pictorallab_relations" target="_blank" rel="noreferrer noopener">
        Telegram Support
    </a>
</div>
                            <SubscribeForm/>
                        </div>
                      
                    </div>
                    <div className={styles.main_block}>
                        <div className={styles.main_about}>
                            <Logo/>
                            <p className={`${styles.text} text-bold`}>
                            Our mission is to redefine the NFT marketplace experience and empower creators and collectors worldwide.
                            </p>
                        </div>
                        <nav className={styles.main_nav}>
                            <FooterNav/>
                        </nav>
                    </div>
                </div>
                <div className={styles.secondary}>
                    <p className={styles.copyright}>
                        
                        © {new Date().getFullYear()} pictorallab. All rights reserved.
                    </p>
                    <div className="secondary__links d-flex g-10">
                        <NavLink to='/privacy' target="_blank" rel="noreferrer noopener">
                            Privacy policy
                        </NavLink>
                        <span className="secondary__links__divider">|</span>
                        <NavLink to="/terms" target="_blank" rel="noreferrer noopener">
                            Terms of service
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default memo(Footer);