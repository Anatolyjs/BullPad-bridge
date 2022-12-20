import { useState } from 'react';
import styles from './Bridge.module.scss';
import BridgeBtn from './BridgeBtn/BridgeBtn';
import Chains from './Chains/Chains';
import DestinationAdress from './DestinationAdress/DestinationAdress';
import Fees from './Fees/Fees';
import Transfer from './Transfer/Transfer';

const Bridge = () => {
    const [toggleMenu, setToggleMenu] = useState(1);
    return (
        <div className={styles.bridge}>
            <Chains  toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
            <Transfer toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
            <Fees />
            <DestinationAdress />
            <BridgeBtn />
        </div>
    )
}

export default Bridge;