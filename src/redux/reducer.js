import {combineReducers, legacy_createStore as createStore} from "redux";
import reducer from "./redux-store.js";

const rootReducer = combineReducers({
    main: reducer
});

const store = createStore(rootReducer);

export default store;