import './CategoriesModel.scss';

const CategoriesModel = ({ open, setOpen }) => {

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
                        <span className="CategoriesModel__name">Millets</span>
                        <button
                            onClick={() => setOpen(!open)}
                            className="CategoriesModel__btn-close"
                        >
                        </button>
                        <div className="CategoriesModel__img"></div>
                        <div className="CategoriesModel__product">
                            <h3 className="title CategoriesModel__product-name">Health Pistachios</h3>
                            <div className="CategoriesModel__rating">⭐⭐⭐⭐⭐</div>
                            <span className="CategoriesModel__old-price">$20.00</span>
                            <span className="CategoriesModel__new-price">$13.00</span>
                            <p className="CategoriesModel__product-info">
                                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </p>
                            <div className="CategoriesModel__wrapper-quantity">
                                <div className="CategoriesModel__quantity-wrap-label-input">
                                <div className="CategoriesModel__quantity-label">Quantity : </div>
                                <div className="CategoriesModel__quantity-wrapper-input">
                                    <input className="CategoriesModel__quantity-input" type="text" />
                                </div>
                                </div>
                                <button className="btn btn_gray CategoriesModel__btn-add">To order</button>
                            </div>
                        </div>
                    </div>
                    <div className="CategoriesModel__info">
                        <div className="CategoriesModel__info-wrap-buttons">
                            <button className="btn btn_pagination-grey CategoriesModel__info-btn">Product Description</button>
                            <button className="btn CategoriesModel__info-btn">Additional Info</button>
                        </div>
                        <div className="CategoriesModel__info-additional">
                            Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8-10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesModel;