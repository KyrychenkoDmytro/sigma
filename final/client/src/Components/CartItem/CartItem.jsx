import './CartItem.scss';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCountProduct, removeProduct } from '../../redux/slices/cart';

const CartItem = ({ _id, name, imageUrl, count, price, discount }) => {
    const dispatch = useDispatch();
    const [countValue, setCountValue] = useState(count || 1);

    let newPrice;
    if (discount) {
        newPrice = Math.floor(price * (1 - discount));
    }

    const newCountValue = (e) => {
        let count = parseInt(e.target.value.replace(/e/gi, ''));

        if (count <= 0) {
            setCountValue(1);
            return false;
        }
        setCountValue(count);
        dispatch(changeCountProduct({ _id, count }));
    }

    const onBlurValue = () => {
        if(isNaN(countValue)) {
            setCountValue(1);
            dispatch(changeCountProduct({ _id, count: 1 }));
        } else {
            setCountValue(countValue);
            dispatch(changeCountProduct({ _id, count: countValue }));
        }
    }

    const removeFromCart = () => {
        if (window.confirm("Are you sure you want to delete the product?")) {
            dispatch(removeProduct(_id));
        }
    }

    return (
        <div className="CartItem">
            <div className="CartItem__wrap">
                <button
                    className="CartItem__btn-cancel-order"
                    onClick={removeFromCart}
                ></button>
                <div className="CartItem__wrapper-img-title">
                    <div className="CartItem__img" style={{ background: `rgba(253, 176, 45, 0.16) url(${imageUrl}) no-repeat center center / cover` }}></div>
                    <h3 className="title CartItem__title">{name}</h3>
                </div>
                <div className="CartItem__wrapper-price">
                    <div className="CartItem__old-price">{discount ? `$${price}.00` : ''}</div>
                    <div className="CartItem__new-price">{discount ? `$${newPrice}.00` : `$${price}.00`}</div>
                </div>
                <div className="CartItem__wrapper-quantity">
                    <div className="CartItem__quantity-label">Quantity : </div>
                    <div className="CartItem__quantity-wrapper-input">
                        <input
                            className="CartItem__quantity-input"
                            type="number"
                            value={countValue}
                            onChange={newCountValue}
                            onBlur={onBlurValue}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;