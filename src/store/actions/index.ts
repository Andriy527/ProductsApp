import {Iproduct} from "../../models";

export enum productActions {
    SET_PRODUCTS_ACTION = 'SET_PRODUCTS_ACTION',
    ADD_PRODUCT_ACTION = 'ADD_PRODUCT_ACTION',
}

export interface IproductActions {
    type: productActions,
    payload: Iproduct | Iproduct[]
}