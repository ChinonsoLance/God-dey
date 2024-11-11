// components
import Title from '@components/Title';
import SimplePageHeader from '@components/SimplePageHeader';
import Wallet from '@layout/connect-wallet';

const ConnectWallet = () => {
    return (
        <>
            <Title title="Login to pictorallab" />
            <SimplePageHeader title="Login to pictorallab" />
            <main>
                <Wallet />
            </main>
        </>
    )
}

export default ConnectWallet