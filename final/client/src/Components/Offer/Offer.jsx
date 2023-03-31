import './Offer.scss';
import CategoriesItem from '../CategoriesItem/CategoriesItem';

import {selectDisplayedItemsInOffer} from '../../redux/slices/products';
import { useSelector } from 'react-redux';

const Offer = () => {
    const displayedItems = useSelector(selectDisplayedItemsInOffer);

    return (
        <section className="Offer">
            <div className="container">
                <div className="Offer__wrap">
                    <div className="title-label Offer__title-label">Offer</div>
                    <h2 className="title Offer__title">We Offer Organic For You</h2>
                    <div className="Offer__wrap-items">
                        {displayedItems.map((item) => (
                            <CategoriesItem key={item._id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Offer;