import {combineReducers} from "redux";
import {productsReducer} from "./productReducer";

export const rootReducer = combineReducers({
    products: productsReducer
})

export type reducerType = ReturnType<typeof rootReducer>