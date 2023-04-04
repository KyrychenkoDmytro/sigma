import { useState, useRef } from 'react';
import './CategoriesModel.scss';

const CategoriesModel = ({ open, setOpen, product }) => {

    const { name, category, imageUrl, price, discount, rank, info, description, additionalInfo } = product || {};

    const [activeNameBtn, setActiveNameBtn] = useState('btn1');
    const [inputValue, setInputValue] = useState(1);
    const textRef = useRef(null);

    let newPrice;
    if (discount) {
        newPrice = Math.floor(price * (1 - discount));
    }

    const handleBtn = (e) => {
        const buttonName = e.target.name;
        setActiveNameBtn(buttonName);
        buttonName === 'btn1' ? textRef.current.textContent = description : textRef.current.textContent = additionalInfo;
    }

    return (
        <div
            onClick={() => setOpen(!open)}
            className={open ? "CategoriesModel _active" : "CategoriesModel"}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="CategoriesModel__wrap"
            >
                <div className="container">
                    <div className="CategoriesModel__block">
                        <span className="CategoriesModel__name">{category}</span>
                        <button
                            onClick={() => setOpen(!open)}
                            className="CategoriesModel__btn-close"
                        >
                        </button>
                        <div className="CategoriesModel__img" style={{ background: `#FFFAFA url(${imageUrl}) no-repeat center center / cover` }}></div>
                        <div className="CategoriesModel__product">
                            <h3 className="title CategoriesModel__product-name">{name}</h3>
                            <div className="CategoriesModel__rating">{"⭐".repeat(rank)}</div>
                            <span className="CategoriesModel__old-price">{discount ? `$${price}.00` : ''}</span>
                            <span className="CategoriesModel__new-price">{discount ? `$${newPrice}.00` : `$${price}.00`}</span>
                            <p className="CategoriesModel__product-info">{info}</p>
                            <div className="CategoriesModel__wrapper-quantity">
                                <div className="CategoriesModel__quantity-wrap-label-input">
                                    <div className="CategoriesModel__quantity-label">Quantity : </div>
                                    <div className="CategoriesModel__quantity-wrapper-input">
                                        <input
                                            className="CategoriesModel__quantity-input"
                                            type="number"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value.replace(/e/gi, ''))}
                                        />
                                    </div>
                                </div>
                                <button className="btn btn_gray CategoriesModel__btn-add">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="CategoriesModel__info">
                        <div className="CategoriesModel__info-wrap-buttons">
                            <button
                                name="btn1"
                                className={activeNameBtn === "btn1" ?
                                    "btn btn_pagination-grey CategoriesModel__info-btn" :
                                    "btn CategoriesModel__info-btn"
                                }
                                onClick={handleBtn}
                            >
                                Product Description
                            </button>
                            <button
                                name="btn2"
                                className={activeNameBtn === "btn2" ?
                                    "btn btn_pagination-grey CategoriesModel__info-btn" :
                                    "btn CategoriesModel__info-btn"
                                }
                                onClick={handleBtn}
                            >Additional Info</button>
                        </div>
                        <div ref={textRef} className="CategoriesModel__info-additional">
                            {activeNameBtn === 'btn1' ? description : additionalInfo}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesModel;