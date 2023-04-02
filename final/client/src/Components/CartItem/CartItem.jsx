import './CartItem.scss';

const CartItem = () => {

    return (
        <div className="CartItem">
                <div className="CartItem__wrap">
                    <div className="CartItem__wrapper-img-title">
                        <div className="CartItem__img"></div>
                        <h3 className="title CartItem__title">Calabrese Broccoli</h3>
                    </div>
                    <div className="CartItem__wrapper-price">
                        <div className="CartItem__old-price">$20.00</div>
                        <div className="CartItem__new-price">$13.00</div>
                    </div>
                    <div className="CartItem__wrapper-quantity">
                        <div className="CartItem__quantity-label">Quantity : </div>
                        <div className="CartItem__quantity-wrapper-input">
                            <input className="CartItem__quantity-input" type="text" />
                        </div>
                    </div>
                    <button className="CartItem__btn-cancel-order"></button>
                </div>
            </div>
    );
}

export default CartItem;