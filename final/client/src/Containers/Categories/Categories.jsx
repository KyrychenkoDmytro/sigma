import './Categories.scss';
import CategoriesItem from '../../Components/CategoriesItem/CategoriesItem';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/slices/products';

const Categories = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    // let startProducts = [...products];
    // startProducts.length = 8;

    return (
        <section className="Categories">
            <div className="container">
                <div className='title-label Categories__title-label'>Categories</div>
                <h2 className="title Categories__title">Our Products</h2>
                <div className="Categories__wrap-items">
                    {/* {startProducts.map((item) => (
                        <CategoriesItem key={item._id} {...item} />
                    ))} */}
                </div>
                <button className='btn btn_gray Categories__btn'>Load More</button>
            </div>
        </section>
    );
}

export default Categories;