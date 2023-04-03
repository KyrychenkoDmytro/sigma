import './Cart.scss';
import CartBanner from '../../Components/CartBanner/CartBanner';
import CartOrder from '../../Containers/CartOrder/CartOrder';
import BannerAfterOrder from '../../Components/BannerAfterOrder/BannerAfterOrder';

const Cart = () => {

    return (
        <div className="Cart">
            <CartBanner />
            <CartOrder />
            <BannerAfterOrder />
        </div>
    );
}

export default Cart;