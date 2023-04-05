import './Cart.scss';
import CartBanner from '../../Components/CartBanner/CartBanner';
import CartOrder from '../../Containers/CartOrder/CartOrder';

import { useEffect } from 'react';

const Cart = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Cart">
            <CartBanner />
            <CartOrder />
        </div>
    );
}

export default Cart;