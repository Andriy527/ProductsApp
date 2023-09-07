import React, {FC} from 'react';
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";

const Products: FC = () => {
    return (
        <div className="col-lg-8 mx-auto py-4">
            <h2 className="pb-4">Products table</h2>
            <SearchBar/>
            <Table/>
        </div>
    );
};

export default Products;