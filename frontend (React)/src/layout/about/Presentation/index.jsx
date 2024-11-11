// styling
import styles from './style.module.scss';

// components
import Video from '@components/Video';
import GradientBtn from '@ui/GradientBtn';
import Spring from '@components/Spring';

// assets
import cover from '@assets/about/cover.webp';

const Presentation = () => {
    return (
        <section>
            <div className={`${styles.container} container`}>
                
                <Spring delay={350}>
                    <div className={`${styles.main} border-hover`}>
                        <h3>Our mission</h3>
                        <p className={styles.main_text}>
                        At pictorallab, our mission is to redefine the NFT marketplace experience and empower creators and collectors worldwide. We are driven by a commitment to foster innovation, creativity, and digital ownership. Our platform aims to provide a secure and user-friendly environment where artists can freely express themselves, showcase their work, and monetize their talents through the sale of NFTs. We strive to connect collectors with exceptional digital assets, offering a diverse range of unique and valuable NFTs. By promoting transparency, accessibility, and community engagement, we aim to shape the future of the NFT ecosystem and unlock new opportunities for artists and collectors alike.
                        </p>
                       
                    </div>
                </Spring>
            </div>
        </section>
    )
}

export default Presentation