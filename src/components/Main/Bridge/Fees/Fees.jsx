import styles from "./Fees.module.scss";
import mark from "../../../../img/questionMark.svg";

const Fees = () => {
  return (
    <div className={styles.fees}>
      <div className={styles.fees__item}>
        <div className={styles.item__text}>
          <div className={styles.text__body}>Bridge Fees</div>
          <img src={mark} alt="additonal" />
        </div>
        <div className={styles.item__amount}>0</div>
      </div>
      <div className={styles.fees__item}>
        <div className={styles.item__text}>
          <div className={styles.text__body}>Relayer Gas Fees</div>
          <img src={mark} alt="additonal" />
        </div>
        <div className={styles.item__amount}>10.5 USDC</div>
      </div>
      <div className={styles.fees__item}>
        <div className={styles.item__text}>Estimated wait time</div>
        <div className={styles.item__amount}>15 minutes</div>
      </div>
    </div>
  );
};
export default Fees;
