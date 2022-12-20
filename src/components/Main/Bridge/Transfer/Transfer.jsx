import styles from "./Transfer.module.scss";
import USDC from "../../../../img/USDC.svg";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import ChainsList from "../ChainsList/ChainsList";
import { useClickOutsideComponent } from "../../../Hook/useClickOutsideComponent";
import { useSelector } from "react-redux";

const Transfer = ({ toggleMenu, setToggleMenu }) => {

  const id = 3;
  const [activeMenu, setActiveMenu] = useState(false);
  const transferRef = useRef(null);
  const tokens = useSelector(state => state.main.tokens);
  const activeToken = tokens.filter(token => token.active)[0];
  const otherTokens = tokens.filter(token => !token.active);

  const showMenu = () => {
    setToggleMenu(3);
    setActiveMenu(true);
  };
  useClickOutsideComponent(transferRef, setActiveMenu);


  return (
    <div ref={transferRef} className={styles.transfer}>
      <div className={styles.transfer__wrapper}>
        <div className={styles.transfer__header}>
          <div className={styles.transfer__title}>I want to transfer</div>
          <button className={styles.transfer__btn}>MAX</button>
        </div>
        <TransferMain activeToken={activeToken} showMenu={showMenu}/>
      </div>
      {id === toggleMenu && activeMenu ? <ChainsList setActiveMenu={setActiveMenu} others={otherTokens} placeholder={"Search token"} /> : null}
    </div>
  );
};

const TransferMain = ({showMenu, activeToken}) => {
  return (
    <>
      <div className={styles.transfer__body}>
        <div onClick={showMenu} className={styles.transfer__token}>
          <div className={styles.token__logo}>
            <img src={activeToken.logo} alt={activeToken.name}/>
          </div>
          <div className={styles.token__name}>{activeToken.name}</div>
          <div  className={styles.token__arrow}>
            <div className={styles.arrow__body}></div>
          </div>
        </div>
        <AmountForm />
      </div>
      <div className={styles.transfer__footer}>
        Connect Metamask to see balance
      </div>
    </>
  );
};

const AmountForm = () => {
  const { register, handleSubmit } = useForm();
  const onFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className={styles.amountForm} onSubmit={handleSubmit(onFormSubmit)}>
      <input {...register("amount", { required: true })} defaultValue="0" />
    </form>
  );
};

export default Transfer;
