import styles from "./Chains.module.scss";
import arrows from "../../../../img/arrows.svg";
import { useState } from "react";
import ChainsList from "../ChainsList/ChainsList";
import { useRef } from "react";
import { useClickOutsideComponent } from "../../../Hook/useClickOutsideComponent";
import { useDispatch, useSelector } from "react-redux";
import { swapChains } from "../../../../redux/redux-store";

const Chains = ({ toggleMenu, setToggleMenu }) => {
  const chainsFrom = useSelector((state) => state.main.chainsFrom);
  const chainsTo = useSelector((state) => state.main.chainsTo);
  const dispatch = useDispatch();
  return (
    <div className={styles.networks}>
      <Chain
        id={1}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        direction={"From"}
        chains={chainsFrom}
      />
      <div
        onClick={() => {
          dispatch(swapChains())
        }}
        className={styles.networks__arrows}
      >
        <img src={arrows} alt="swap" />
      </div>
      <Chain
        id={2}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        direction={"To"}
        chains={chainsTo}
      />
    </div>
  );
};

const Chain = ({ direction, toggleMenu, setToggleMenu, id, chains }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const element = useRef(null);
  useClickOutsideComponent(element, setActiveMenu);
  const activeChain = chains.filter((chain) => chain.active)[0];
  const otherChains = chains.filter((chain) => !chain.active);
  return (
    <div
      ref={element}
      onClick={() => {
        setActiveMenu(!activeMenu);
        setToggleMenu(id);
      }}
      className={styles.network}
    >
      <div className={styles.network__body}>
        <div className={styles.network__title}>{direction}</div>
        <div className={styles.network__chain}>
          <div className={styles.chain__img}>
            <img src={activeChain.logo} alt={activeChain.name} />
          </div>
          <div className={styles.chain__name}>{activeChain.name}</div>
          <div className={styles.chain__arrow}>
            <div className={styles.arrow__body}></div>
          </div>
        </div>
      </div>
      {id === toggleMenu && activeMenu ? (
        <ChainsList
          direction={direction}
          others={otherChains}
          placeholder={"Search chain"}
          setActiveMenu={setActiveMenu}
        />
      ) : null}
    </div>
  );
};

export default Chains;
