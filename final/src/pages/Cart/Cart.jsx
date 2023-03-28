import './Cart.scss';
import CartBanner from '../../Components/CartBanner/CartBanner';
import CartOrder from '../../Containers/CartOrder/CartOrder';

const Cart = () => {

    return (
        <div className="Cart">
            <CartBanner />
            <CartOrder />
        </div>
    );
}

export default Cart;