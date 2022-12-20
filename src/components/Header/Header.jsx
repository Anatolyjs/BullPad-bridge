import styles from "./Header.module.scss";
import logo from "../../img/BULLPADwhite(1).svg";
import cn from 'classnames';
import { useState } from "react";
import { useDispatch } from "react-redux";

const Header = ({setOpenWallets}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const onWalletClick = () => {
    setOpenWallets(true);
    setMenuOpen(false);
  }
  return (
    <header className="Header">
      <div className="container">
        <div className={cn(styles.header, isMenuOpen && styles.active)}>
          <div className={styles.header__logo_mobile}>
            <img src={logo} alt="Bullpad"></img>
          </div>
          <div className={styles.header__body}>
            <div className={styles.header__left}>
              <div className={styles.header__logo}>
                <img src={logo} alt="Bollpad"></img>
              </div>
              <nav className={styles.header__nav}>
                <a href="http://194.163.190.127/index.html#">Home</a>
                <a href="http://194.163.190.127/index.html#">Getting started </a>
                <a href="http://194.163.190.127/index.html#">Transaction</a>
                <a href="http://194.163.190.127/index.html#">Support</a>
              </nav>
            </div>
            <button onClick={onWalletClick} className={styles.header__connectWallet}>
              Connect wallet
            </button>
          </div>
          <div onClick={() => {setMenuOpen(!isMenuOpen)}} className={styles.header__burgerBtn}>
            <div className={styles.btn__item}></div>
            <div className={styles.btn__item}></div>
            <div className={styles.btn__item}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
