import styles from './Wallets.module.scss';
import metamask from '../../img/metamask.svg';
import secondWallet from '../../img/secondWallet.svg';
import coinbaseWallet from '../../img/coinbaseWallet.svg';
import cn from 'classnames'

const walletsList = [
    {name: 'Metamsk', logo: metamask},
    {name: 'Wallet Connect', logo: secondWallet},
    {name: 'Coinbase Wallet', logo: coinbaseWallet}
]

const Wallets = ({openWallets, setOpenWallets}) => {

    const walletsItems = walletsList.map(wallet => <WalletsItem key={wallet.name} name={wallet.name} logo={wallet.logo}/>)
    return (
        <div onClick={() => {setOpenWallets(false)}} className={cn(styles.wallets, openWallets && styles.active)}>
            <div onClick={(e) => {e.stopPropagation()}} className={cn(styles.wallets__body, openWallets && styles.active)}>
                <div className={styles.wallets__title}>Connect Wallet</div>
                <div className={styles.wallets__items}>
                    {walletsItems}
                </div>
                <div className={styles.wallets__what}><a href='#'>What is a Wallet?</a></div>
                <div onClick={() => {setOpenWallets(false)}} className={styles.wallets__closeBtn}>
                    <div className={styles.btn__line}></div>
                    <div className={styles.btn__line}></div>
                </div>
            </div>
        </div>
    )
}

const WalletsItem = ({name, logo}) => {
  return (
    <div className={styles.wallets__item}>
      <div className={styles.item__logo}>
        <img src={logo} alt={name}/>
      </div>
      <div className={styles.item__name}>{name}</div>
    </div>
  );
}

export default Wallets;