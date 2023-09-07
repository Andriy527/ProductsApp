import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";

const AppRouter: FC = () => {
    return (
      <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/add" element={<AddProduct />} />
      </Routes>
    );
};

export default AppRouter;