import './CartForm.scss';

const CartForm = () => {

    return (
        <div className="CartForm">
            <div className="CartForm__wrap">
                <form>
                    <div className="CartForm__full-name-wrap">
                        <div className="CartForm__label CartForm__full-name-label">Full Name*</div>
                        <div className="CartForm__input CartForm__full-name-input">
                            <input type="text" placeholder="Your Email Address" required />
                        </div>
                    </div>
                    <div className="CartForm__email-wrap">
                        <div className="CartForm__label CartForm__email-label">Your Email*</div>
                        <div className="CartForm__input CartForm__email-input">
                            <input type="text" placeholder="example@yourmail.com" required />
                        </div>
                    </div>
                    <div className="CartForm__address-wrap">
                        <div className="CartForm__label CartForm__address-label">Address*</div>
                        <div className="CartForm__input CartForm__address-input">
                            <input type="text" placeholder="Your company address" required />
                        </div>
                    </div>
                    <div className="CartForm__phone-wrap">
                        <div className="CartForm__label CartForm__phone-label">Phone number*</div>
                        <div className="CartForm__input CartForm__phone-input">
                            <input type="text" placeholder="Enter your phone" required />
                        </div>
                    </div>
                    <div className="CartForm__message-wrap">
                        <div className="CartForm__label CartForm__message-label">Message</div>
                        <div className="CartForm__message-textarea">
                            <textarea placeholder="Some extra information" required></textarea>
                        </div>
                    </div>
                    <button className="btn btn_pagination-grey CartForm__btn-confirm">Confirm</button>
                </form>
            </div>
        </div>
    );
}

export default CartForm;