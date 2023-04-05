import './CartOrder.scss';
import CartItem from '../../Components/CartItem/CartItem';
import CartForm from '../CartForm/CartForm';
import { useSelector } from 'react-redux';

const CartOrder = () => {
    const { allProducts, totalCost, discount } = useSelector(state => state.cart);

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
                    <button className="btn btn_gray CartOrder__btn-order" id="btn-cart-to-order">To order</button>
                    <CartForm />
                </div>
            </div>
        </div>
    );
}

export default CartOrder;