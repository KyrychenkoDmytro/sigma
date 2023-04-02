import './CartOrder.scss';
import CartItem from '../../Components/CartItem/CartItem';
import CartForm from '../CartForm/CartForm';

const CartOrder = () => {

    return (
        <div className="CartOrder">
            <div className="container">
                <div className="CartOrder__wrap">
                   <CartItem />
                   <h3 className="title CartOrder__total-cost">Total Cost <span>26$</span></h3>
                   <h3 className="title CartOrder__total-discont">Discount <span>14$</span></h3>
                   <button className="btn btn_gray CartOrder__btn-order" id="btn-cart-to-order">To order</button>
                   {/* <CartForm /> */}
                </div>
            </div>
        </div>
    );
}

export default CartOrder;