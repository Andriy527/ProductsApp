import React, {FC, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {setProducts} from "../store/asyncActions";

const SearchBar: FC = () => {
    const [inputVal, setInputVal] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (inputVal) {
            dispatch(setProducts(inputVal) as any)
        }
    }, [inputVal])

    return (
        <div className="col-lg-4 ml-auto mr-0 pr-0">
            <div className="form-group">
                <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} type="text"
                       className="form-control" placeholder="Search product by name or category ..."/>
            </div>
        </div>
    );
};

export default SearchBar;