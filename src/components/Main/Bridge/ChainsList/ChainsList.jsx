import styles from "./ChainsList.module.scss";
import { useForm } from "react-hook-form";
import {
  setActiveToken,
  setActiveChainFrom,
  setActiveChainTo,
} from "../../../../redux/redux-store";
import { useDispatch } from "react-redux";
import cn from "classnames";

const ChainsList = ({ placeholder, others, direction, setActiveMenu }) => {
  const dispatch = useDispatch();
  const onChainClick = (name) => {
    if (placeholder === "Search chain" && direction === "From") {
      dispatch(setActiveChainFrom(name));
    }
    if (placeholder === "Search chain" && direction === "To") {
      dispatch(setActiveChainTo(name));
    }
    placeholder === "Search token" && dispatch(setActiveToken(name));
    setActiveMenu(false);
  };
  const itemsList = others.map((token) => (
    <Chain
      placeholder={placeholder}
      onClick={onChainClick}
      key={token.name}
      name={token.name}
      logo={token.logo}
    />
  ));
  const isToken = placeholder === "Search token";
  return (
    <div className={cn(styles.chainsList, isToken && styles.tokens)}>
      <div className={styles.chainList__body}>
        <FindChainForm placeholder={placeholder} />
        {itemsList}
      </div>
    </div>
  );
};
const FindChainForm = ({ placeholder }) => {
  const { register } = useForm();
  return (
    <form className={styles.chainsList__form}>
      <input {...register("item")} placeholder={placeholder} />
    </form>
  );
};

const Chain = ({ logo, name, onClick}) => {
  return (
    <div
      onClick={() => {
        onClick(name);
      }}
      className={styles.chain}
    >
      <div className={styles.chain__logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.chain__name}>{name}</div>
    </div>
  );
};

export default ChainsList;
