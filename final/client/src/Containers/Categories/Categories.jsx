import './Categories.scss';
import CategoriesItem from '../../Components/CategoriesItem/CategoriesItem';

import { useSelector, useDispatch } from 'react-redux';
import { selectDisplayedItemsInCategories } from '../../redux/slices/products';
import { changeLimitDisplayedItems } from '../../redux/slices/products';


const Categories = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const displayedItems = useSelector(selectDisplayedItemsInCategories);
    const allItems = useSelector(state => state.products.items);

    const changeCountDisplayedItems = (e) => {

        if (displayedItems.length !== allItems.length) {
            e.target.textContent = 'Hide All';
            dispatch(changeLimitDisplayedItems(16));
        } else {
            e.target.textContent = 'Load More';
            dispatch(changeLimitDisplayedItems(8));
        }

    }

    return (
        <section className="Categories">
            <div className="container">
                <div className='title-label Categories__title-label'>Categories</div>
                <h2 className="title Categories__title">Our Products</h2>
                <div className="Categories__wrap-items">
                    {displayedItems.map((item) => (
                        <CategoriesItem
                            onClick={() => setOpen(!open)}
                            key={item._id}
                            {...item}
                        />
                    ))}
                </div>
                <button className='btn btn_gray Categories__btn' onClick={changeCountDisplayedItems}>Load More</button>
            </div>
        </section>
    );
}

export default Categories;