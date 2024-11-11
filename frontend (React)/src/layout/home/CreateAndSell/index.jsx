// styling
import styles from './style.module.scss';

// components
import Ticker from '@components/Ticker';
import LazyImage from '@components/LazyImage';
import Spring from '@components/Spring';

// assets
import wallet from '@assets/icons/wallet.svg';
import folder from '@assets/icons/folder.svg';
import cloud from '@assets/icons/cloud.svg';
import tags from '@assets/icons/tags.svg';

const CreateAndSell = () => {
    const data = [
        {
            icon: wallet,
            title: 'Set up your wallet',
            text: 'Securely set up your digital wallet on pictorallab to begin your journey into the world of NFTs and discover unique digital assets.'
        },
        {
            icon: folder,
            title: 'Create your collection',
            text: 'Bring your digital creations to life by easily creating and managing your own NFT collection on pictorallab, where artists and collectors converge to showcase and trade unique digital assets.'
        },
        {
            icon: cloud,
            title: 'Add your NFTs',
            text: 'Expand your digital portfolio by effortlessly adding your NFTs to pictorallab, where you can showcase and sell your unique digital assets to a global audience of art enthusiasts and collectors.'
        },
        {
            icon: tags,
            title: 'List them for sale',
            text: 'Maximize the potential of your NFTs by listing them for sale on pictorallab, the premier marketplace for digital assets. Connect with a vibrant community of buyers and collectors, and monetize your creations with ease and transparency.'
        }
    ];

    return (
        <div>
            <Ticker text="Create & sell your NFTs" />
            <div className="container">
                <div className={styles.list}>
                    {
                        data.map((item, index) => (
                            <Spring className={styles.list_item} key={index} index={index}>
                                <LazyImage className={styles.img} src={item.icon} alt={item.title} effect="opacity" />
                                <h5 className={styles.title}>{item.title}</h5>
                                <p className={styles.text}>{item.text}</p>
                            </Spring>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CreateAndSell