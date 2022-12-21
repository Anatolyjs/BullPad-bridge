import ethereum from "../img/ethereum.svg";
import USDC from '../img/USDC.svg';
import bitcoin from '../img/bitcoin.svg';
import USDT from '../img/USDT.svg';
import Quai from '../img/quai.svg';

const SWAP_CHAINS = 'SWAP_CHAINS',
    SET_ACTIVE_CHAIN_TO = 'SET_ACTIVE_CHAIN_TO',
    SET_ACTIVE_CHAIN_FROM = 'SET_ACTIVE_CHAIN_FROM',
    SET_ACTIVE_TOKEN = 'SET_ACTIVE_TOKEN',
    TOGGLE_OPEN_WALLETS = 'TOGGLE_OPEN_WALLETS';

const initialState =  {
    tokens: [
        { name: "USDC", logo: USDC , active: true },
        { name: "BTC", logo: bitcoin , active: false },
        { name: "ETH", logo: ethereum , active: false },
        { name: "USDT", logo: USDT , active: false }
    ],
    chainsFrom: [
        { name: "Bitcoin", logo: bitcoin, active: false },
        { name: "Ethereum", logo: ethereum, active: true },
        { name: "Tether", logo: USDT, active: false },
        { name: "Quai", logo: Quai, active: false }
    ],
    chainsTo: [
        { name: "Bitcoin", logo: bitcoin, active: false },
        { name: "Ethereum", logo: ethereum, active: false },
        { name: "Tether", logo: USDT, active: false },
        { name: "Quai", logo: Quai, active: true }
    ],
    isOpenWallets: false
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SWAP_CHAINS:
            return {
                ...state,
                chainsFrom: [...state.chainsTo],
                chainsTo: [...state.chainsFrom]
            }
        case SET_ACTIVE_CHAIN_TO:
            return {
                ...state,
                chainsTo: [...state.chainsTo.map((chain) => {
                    if (chain.name === action.payload) {
                        return {...chain, active: true}
                    } else {
                        return {...chain, active: false}
                    }
                })]
            }
        case SET_ACTIVE_CHAIN_FROM:
            return {
                ...state,
                chainsFrom: [...state.chainsFrom.map((chain) => {
                    if (chain.name === action.payload) {
                        return {...chain, active: true}
                    } else {
                        return {...chain, active: false}
                    }
                })]
            }
        case SET_ACTIVE_TOKEN:
            return {
                ...state,
                tokens: [...state.tokens.map((token) => {
                    if (token.name === action.payload) {
                        return {...token, active: true}
                    } else {
                        return {...token, active: false}
                    }
                })]
            }
        case TOGGLE_OPEN_WALLETS:
            return {
                ...state,
                isOpenWallets: !state.isOpenWallets
            }
        default:
            return state;
    }
}

export const swapChains = (payload) => ({type: SWAP_CHAINS, payload});
export const setActiveChainTo = (payload) => ({type: SET_ACTIVE_CHAIN_TO, payload});
export const setActiveChainFrom = (payload) => ({type: SET_ACTIVE_CHAIN_FROM, payload});
export const setActiveToken = (payload) => ({type: SET_ACTIVE_TOKEN, payload});
export const toggleOpenWallets = () => ({type: TOGGLE_OPEN_WALLETS});

export default Reducer;

