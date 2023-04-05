import './CartOrder.scss';
import CartItem from '../../Components/CartItem/CartItem';
import CartForm from '../CartForm/CartForm';

import { useSelector } from 'react-redux';
import { useState } from 'react';

const CartOrder = () => {
    const { allProducts, totalCost, discount } = useSelector(state => state.cart);
    const [isActiveForm, setIsActiveForm] = useState(false);

    return (
        <div className="CartOrder">
            <div className="container">
                <div className="CartOrder__wrap">
                    {allProducts.map((item) => (
                        <CartItem
                            key={item._id}
                            {...item}
                        />
                    ))}
                    <h3 className="title CartOrder__total-cost">Total Cost <span>{totalCost}$</span></h3>
                    <h3 className="title CartOrder__total-discont">Discount <span>{discount}$</span></h3>
                    <button 
                    className={isActiveForm ? "btn btn_gray CartOrder__btn-order _hide" : "btn btn_gray CartOrder__btn-order"}
                    onClick={()=> setIsActiveForm(!isActiveForm)}
                    >To order</button>
                    <CartForm isActive={isActiveForm} setIsActive={setIsActiveForm} products={allProducts} totalCost={totalCost} totalDiscount={discount}/>
                </div>
            </div>
        </div>
    );
}

export default CartOrder;