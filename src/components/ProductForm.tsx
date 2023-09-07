import React, {FC} from 'react';
import {Formik, Field, Form} from "formik";
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {setProduct} from "../store/asyncActions";

interface props {
    setFormSubmiting: React.SetStateAction<any>
}

const ProductForm: FC<props> = ({setFormSubmiting}) => {
    const dispatch = useDispatch();

    const handleSubmit = (values: any) => {
        dispatch(setProduct(values) as any)
        setFormSubmiting(true);
    }

    const validationSchema = Yup.object().shape({
        brand: Yup.string().required('Brand is required'),
        category: Yup.string().required('Category is required'),
        description: Yup.string().required('Description is required'),
        discountPercentage: Yup.number().positive().required('Discount is required'),
        price: Yup.number().positive().min(1, 'Price must be more than 0').required('Price is required'),
        rating: Yup.number().positive().min(1, 'Rating must be more than 0'),
        stock: Yup.number().positive(),
        thumbnail: Yup.string().matches(/(https?:\/\/.*\.(?:png|jpg))/i,
            'Enter correct image url!'
        ).required('Please enter image url'),
        title: Yup.string().required('Title is required')
    })
    return (
        <div className="card p-5">
            <Formik
                initialValues={{
                    brand: '',
                    category: '',
                    description: '',
                    discountPercentage: 0,
                    price: 0,
                    rating: 0,
                    stock: 0,
                    thumbnail: '',
                    title: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({errors, touched,}: any) => (
                    <Form className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="brand">Product brand</label>
                            <Field id="brand" name="brand" className="form-control"/>
                            {errors.brand && touched.brand && (
                                <div className="text-danger">{errors.brand}</div>
                            )}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="category">Product category</label>
                            <Field id="category" name="category" className="form-control"/>
                            {errors.category && touched.category && (
                                <div className="text-danger">{errors.category}</div>
                            )}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="description">Product description</label>
                            <Field id="description" name="description" className="form-control"/>
                            {errors.description && touched.description && (
                                <div className="text-danger">{errors.description}</div>
                            )}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="discountPercentage">Product discount percentage</label>
                            <Field id="discountPercentage" type="number" name="discountPercentage"
                                   className="form-control"/>
                            {errors.discountPercentag && touched.discountPercentag && (
                                <div className="text-danger">{errors.discountPercentag}</div>
                            )}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="price">Product price</label>
                            <Field id="price" name="price" className="form-control"/>
                            {errors.price && touched.price && (
                                <div className="text-danger">{errors.price}</div>
                            )}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="rating">Product rating</label>
                            <Field id="rating" name="rating" className="form-control"/>
                            {errors.rating && touched.rating && (
                                <div className="text-danger">{errors.rating}</div>
                            )}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="stock">Product stock</label>
                            <Field id="stock" name="stock" type="number" className="form-control"/>
                            {errors.stock && touched.stock && (
                                <div className="text-danger">{errors.stock}</div>
                            )}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="thumbnail">Product thumbnail</label>
                            <Field id="thumbnail" name="thumbnail" className="form-control"/>
                            {errors.thumbnail && touched.thumbnail && (
                                <div className="text-danger">{errors.thumbnail}</div>
                            )}
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="brand">Product title</label>
                            <Field id="title" name="title" className="form-control"/>
                            {errors.title && touched.title && (
                                <div className="text-danger">{errors.title}</div>
                            )}
                        </div>
                        <div className="col-lg-12">
                            <button type="submit" className="btn btn-primary">Add product</button>
                        </div>
                    </Form>)}
            </Formik>
        </div>
    );
};

export default ProductForm;