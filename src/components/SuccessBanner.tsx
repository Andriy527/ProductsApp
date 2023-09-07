import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface props {
    setFormSubmiting: React.SetStateAction<any>
}

const SuccessBanner: FC<props> = ({setFormSubmiting}) => {

    return (
        <div className="card p-5">
            <h2 className="text-center">The product add success!</h2>
            <Link onClick={() => setFormSubmiting(false)} className="btn btn-primary" to="/">Go to product list</Link>
        </div>
    );
};

export default SuccessBanner;