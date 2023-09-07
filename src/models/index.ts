export interface IproductState {
    products: Iproduct[] | any
}

export interface Iproduct {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    price: number,
    rating: number,
    images: string[],
    stock: number,
    thumbnail: string,
    title: string
}