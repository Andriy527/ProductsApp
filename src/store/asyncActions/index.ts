import {ThunkDispatch} from 'redux-thunk';
import {addProduct, getProducts} from "../../http/productsApi";
import {addProductAction, setProductsAction} from "../reducers/productReducer";
import {Iproduct} from "../../models";

export const setProducts = (searchVal: null | string) => {
    return async (dispatch : ThunkDispatch<any, any, any>) => {
        const {products} = await getProducts(searchVal);

        dispatch(setProductsAction(products))
    }
}

export const setProduct = (product: Iproduct) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        const {data} = await addProduct(product);

        dispatch(addProductAction(data));
    }
}
