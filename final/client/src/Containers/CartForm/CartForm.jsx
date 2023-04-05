import './CartForm.scss';

import { useState } from 'react';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearAllInCartSlice } from '../../redux/slices/cart';

const CartForm = ({ isActive, setIsActive, products, totalCost, totalDiscount }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [fullName, setFullName] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [message, setMessage] = useState('');

    const validateFullName = (name) => {
        const regex = /^([A-Z]+[-']?)\s+([A-Z'-][A-Z]+)*$/i;
        return regex.test(name.trim());
    };

    const validateEmail = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email.trim());
    };

    const validatePhone = (phone) => {
        const regex = /^(\+380|0) ?\d{2} ?\d{3} ?\d{2} ?\d{2}$/;
        return regex.test(phone.trim());
    };

    const formData = {
        fullName,
        email,
        address,
        phone,
        message,
        products,
        totalCost,
        totalDiscount
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        validateFullName(fullName) ? setFullNameError('') : setFullNameError('Enter your full name');
        validateEmail(email) ? setEmailError('') : setEmailError('Enter a valid email address');
        validatePhone(phone) ? setPhoneError('') : setPhoneError('Enter a valid phone');

        if (validateFullName(fullName) && validateEmail(email) && validatePhone(phone)) {
            try {
                const response = await axios.post('/orders', formData);
                console.log(response);
                if (response.status >= 200 && response.status <= 299) {
                    dispatch(clearAllInCartSlice());
                    setEmail('');
                    setFullName('');
                    setAddress('');
                    setPhone('');
                    setMessage('');
                    setIsActive(!isActive);
                    navigate('/thanks');
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className={isActive ? "CartForm _active" : "CartForm"}>
            <div className="CartForm__wrap">
                <form onSubmit={handleSubmit}>
                    <div className="CartForm__full-name-wrap">
                        <div className="CartForm__error CartForm__full-name-error">{fullNameError}</div>
                        <div className="CartForm__label CartForm__full-name-label">Full Name*</div>
                        <div className="CartForm__input CartForm__full-name-input">
                            <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                type="text"
                                placeholder="Your Full Name"
                                required />
                        </div>
                    </div>
                    <div className="CartForm__email-wrap">
                        <div className="CartForm__error CartForm__email-error">{emailError}</div>
                        <div className="CartForm__label CartForm__email-label">Your Email*</div>
                        <div className="CartForm__input CartForm__email-input">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Your Email Address"
                                required
                            />
                        </div>
                    </div>
                    <div className="CartForm__address-wrap">
                        <div className="CartForm__error CartForm__address-error"></div>
                        <div className="CartForm__label CartForm__address-label">Address*</div>
                        <div className="CartForm__input CartForm__address-input">
                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                type="text"
                                placeholder="Your address"
                                required />
                        </div>
                    </div>
                    <div className="CartForm__phone-wrap">
                        <div className="CartForm__error CartForm__phone-error">{phoneError}</div>
                        <div className="CartForm__label CartForm__phone-label">Phone number*</div>
                        <div className="CartForm__input CartForm__phone-input">
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="tel"
                                placeholder="Phone: +380/0 501233232"
                                required
                            />
                        </div>
                    </div>
                    <div className="CartForm__message-wrap">
                        <div className="CartForm__error CartForm__message-error"></div>
                        <div className="CartForm__label CartForm__message-label">Message</div>
                        <div className="CartForm__message-textarea">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Some Extra Information"
                            ></textarea>
                        </div>
                    </div>
                    <button className="btn btn_pagination-grey CartForm__btn-confirm">Confirm</button>
                </form>
            </div>
        </div>
    );
}

export default CartForm;