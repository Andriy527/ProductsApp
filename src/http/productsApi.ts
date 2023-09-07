import {$host} from "./index";

export const getProducts = async (searchVal: null | string) => {
    const url = searchVal ? `products/search?q=${searchVal}` : 'products';
    const {data} = await $host.get(url);

    return data;
}

export const addProduct = async (product: any) => {
    const data = await $host.post('products/add', product);

    return data;
}