import React, {FC, useState} from 'react';
import ProductForm from "../components/ProductForm";
import SuccessBanner from "../components/SuccessBanner";

const AddProduct: FC= () => {
    const [isFormSubmiting, setIsFormSubmiting] = useState(false);

    return (
        <div className="col-lg-8 mx-auto py-4">
            <h2 className="pb-4">Add product</h2>
            {isFormSubmiting
                ? <SuccessBanner setFormSubmiting={setIsFormSubmiting}/>
                : <ProductForm setFormSubmiting={setIsFormSubmiting}/>
            }
        </div>
    );
};

export default AddProduct;