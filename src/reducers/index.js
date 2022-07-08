import { reducers as frutaReducers } from "./fruta.reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    frutaReducers
});

export {reducers};
