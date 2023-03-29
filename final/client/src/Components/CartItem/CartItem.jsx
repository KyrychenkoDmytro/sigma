import './CartItem.scss';

const CartItem = () => {

    return (
        <div className="CartItem">
            <div className="container">
                <div className="CartItem__wrap">
                    <div className="CartItem__img"></div>
                    <h3 className="title CartItem__title">Calabrese Broccoli</h3>
                    <div className="CartItem__old-price">$20.00</div>
                    <div className="CartItem__new-price">$13.00</div>
                    <div className="CartItem__quantity-label">Quantity : </div>
                    <div className="CartItem__quantity">2</div>
                    <button className="CartItem__btn-cancel-order"></button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;