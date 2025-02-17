// styling
import styles from './style.module.scss';

// components
import {NavLink} from 'react-router-dom';
import LazyImage from '@components/LazyImage';
import Spring from '@components/Spring';

// hooks
import {useWindowSize} from 'react-use';

// assets
import img1 from '@assets/cta/1.webp';
import img2 from '@assets/cta/2.webp';
import img3 from '@assets/cta/3.webp';
import img4 from '@assets/cta/4.webp';

const CTA = () => {
    const {width} = useWindowSize();

    return (
        <section>
            <div className="container">
                <div className={`${styles.wrapper} border-10`}>
                    <div className={styles.main}>
                        <h3>
                            <span className={`${styles.emojis} h3`}>
                                <span>🔥</span>
                                <span>🔥</span>
                                <span>🔥</span>
                            </span>
                            Create, sell and collect NFT digital assets
                        </h3>
                        <p className={`${styles.main_text} text-bold text-light`}>
                        pictorallab empowers you to unleash your creativity by creating unique NFT digital assets. Showcase your artistic vision, mint one-of-a-kind collectibles, and establish your presence in the vibrant NFT community. With our seamless marketplace integration, you can effortlessly sell your NFTs, connecting with a global audience of collectors who value your creations. Join the revolution of digital ownership and start building your coveted NFT collection on pictorallab today.
                        </p>
                        <div>
                            <NavLink className={`${styles.main_btn} btn btn--outline btn--outline-white`}
                                     to="/create">
                                Create NFT
                            </NavLink>
                        </div>
                    </div>
                    {
                        width >= 768 &&
                        <div className={styles.media}>
                            <Spring className={`${styles.big} ${styles.big1}`} type="grow">
                                <LazyImage src={img1} alt="img"/>
                            </Spring>
                            <Spring className={`${styles.big} ${styles.big2}`} type="grow">
                                <LazyImage src={img2} alt="img"/>
                            </Spring>
                            <Spring className={styles.rectangle} type="grow">
                                <LazyImage src={img3} alt="img"/>
                            </Spring>
                            <Spring className={styles.square} type="grow">
                                <LazyImage src={img4} alt="img"/>
                            </Spring>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default CTA