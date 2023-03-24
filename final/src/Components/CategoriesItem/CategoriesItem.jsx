import './CategoriesItem.scss';

const CategoriesItem = () => {
    return (
        <section className="CategoriesItem">
            <span className="CategoriesItem__name">Vegetable</span>
            <h6 className="title CategoriesItem__product-name">Calabrese Broccoli</h6>
            <div className="CategoriesItem__product-info">
                <div className="CategoriesItem__old-price">$20.00</div>
                <div className="CategoriesItem__new-price">$13.00</div>
                <div className="CategoriesItem__rating">&#11088;&#11088;&#11088;&#11088;&#11088;</div>
            </div>
        </section>
    );
}

export default CategoriesItem;