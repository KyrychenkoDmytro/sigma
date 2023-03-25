import './Offer.scss';
import CategoriesItem from '../CategoriesItem/CategoriesItem';

const Offer = () => {
    return (
        <section className="Offer">
            <div className="container">
                <div className="Offer__wrap">
                    <div className="title-label Offer__title-label">Offer</div>
                    <h2 className="title Offer__title">We Offer Organic For You</h2>
                    <div className="Offer__wrap-items">
                        {[...Array(4)].map((_, index) => (
                            <CategoriesItem key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Offer;