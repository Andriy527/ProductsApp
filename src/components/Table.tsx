import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {setProducts} from "../store/asyncActions";
import {Iproduct} from "../models";

const Table: FC = () => {
    const {products} = useTypedSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!products.length) {
            dispatch(setProducts(null) as any);
        }
    }, [])

    return (
        <>
            <div style={{maxHeight: '700px', overflowX: 'hidden', overflowY: 'auto'}}>
                <table className="table">
                    <thead className="thead-dark" style={{position: 'sticky', top: 0, zIndex: 2}}>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Category</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(products && products.length)
                        ?
                        products.map((product: Iproduct, index: number) => {
                            return <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td><img className="img-thumbnail" src={product.thumbnail}/></td>
                                <td>{product.rating}</td>
                                <td>{product.stock}</td>
                                <td>{product.category}</td>
                            </tr>
                        })
                        :
                        <tr>loading...</tr>}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;