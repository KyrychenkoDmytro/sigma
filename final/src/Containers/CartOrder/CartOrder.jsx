import './CartOrder.scss';
import CartItem from '../CartItem/CartItem';

const CartOrder = () => {

    return (
        <div className="CartOrder">
            <div className="container">
                <div className="CartOrder__wrap">
                   <CartItem />
                </div>
            </div>
        </div>
    );
}

export default CartOrder;