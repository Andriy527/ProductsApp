import {Iproduct, IproductState} from "../../models";
import {IproductActions, productActions} from "../actions";

const productState: IproductState  = {
    products: []
}

export const productsReducer = (state: IproductState = productState, action: IproductActions) => {
        switch (action.type) {
            case productActions.SET_PRODUCTS_ACTION:
                return {...state, products: action.payload}
            case productActions.ADD_PRODUCT_ACTION:
                return {...state, products: [...state.products, action.payload]}
            default:
                return state;
        }
}

export const setProductsAction = (payload: Iproduct[]) => ({type: productActions.SET_PRODUCTS_ACTION, payload: payload})
export const addProductAction = (payload: Iproduct) => ({type: productActions.ADD_PRODUCT_ACTION, payload: payload})
