import './CategoriesItem.scss';

import { useDispatch } from 'react-redux';
import { getModelId } from '../../redux/slices/products';

const CategoriesItem = (props) => {
    const { onClick, _id, category, name, imageUrl, price, discount, rank } = props;
    const dispatch = useDispatch();
    let newPrice;
    if (discount) {
        newPrice = Math.floor(price * (1 - discount));
    }

    const handleModelProduct = () => {
        onClick();
        dispatch(getModelId(_id));
    }

    return (
        <section className="CategoriesItem" onClick={handleModelProduct}>
            <span className="CategoriesItem__name">{category}</span>
            <div className="CategoriesItem__img" style={{ background: `#F9F8F8 url(${imageUrl}) no-repeat center center / cover` }}></div>
            <h6 className="title CategoriesItem__product-name">{name}</h6>
            <div className="CategoriesItem__product-info">
                <div className="CategoriesItem__old-price">{discount ? `$${price}.00` : ''}</div>
                <div className="CategoriesItem__new-price">{discount ? `$${newPrice}.00` : `$${price}.00`}</div>
                <div className="CategoriesItem__rating">{"⭐".repeat(rank)}</div>
            </div>
        </section>
    );
}

export default CategoriesItem;