import './Categories.scss';
import CategoriesItem from '../../Components/CategoriesItem/CategoriesItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(({data}) => setProducts(data));
    }, [])
    console.log(products);

    return (
        <section className="Categories">
            <div className="container">
                <div className='title-label Categories__title-label'>Categories</div>
                <h2 className="title Categories__title">Our Products</h2>
                <div className="Categories__wrap-items">
                    {/* {[...Array(8)].map((_, index) => (
                        <CategoriesItem key={index} />
                    ))} */}
                    {products.map((item) => (
                        <CategoriesItem key={item._id}/>
                    ))}
                </div>
                <button className='btn btn_gray Categories__btn'>Load More</button>
            </div>
        </section>
    );
}

export default Categories;