import './Categories.scss';
import CategoriesItem from '../../Components/CategoriesItem/CategoriesItem';

const Categories = () => {

    return (
        <section className="Categories">
            <div className="container">
                <div className='title-label Categories__title-label'>Categories</div>
                <h2 className="title Categories__title">Our Products</h2>
                <div className="Categories__wrap-items">
                    {[...Array(8)].map((_, index) => (
                        <CategoriesItem key={index} />
                    ))}
                </div>
                <button className='btn btn_gray Categories__btn'>Load More</button>
            </div>
        </section>
    );
}

export default Categories;