import './Home.scss';
import Banner from '../../Components/Banner/Banner';
import OfferBanner from '../../Components/OfferBanner/OfferBanner';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Categories from '../../Containers/Categories/Categories';
import CategoriesModel from '../../Containers/CategoriesModel/CategoriesModel';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Offer from '../../Components/Offer/Offer';
import EcoFriendly from '../../Components/EcoFriendly/EcoFriendly';
import Gallery from '../../Components/Gallery/Gallery';
import News from '../../Components/News/News';
import Newsletter from '../../Components/Newsletter/Newsletter';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getProductById, checkHeaderVisibility } from '../../redux/slices/products';

const Home = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modelProduct = useSelector(getProductById);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    // cancel scroll from body at resolution less than 768
    useEffect(() => {
        const bodyClassList = document.body.classList;
        const mediaQuery = window.matchMedia('(max-width: 767.98px)');

        dispatch(checkHeaderVisibility(isModalOpen));

        const handleResize = () => {
            bodyClassList.remove('_no-scroll');
            if (mediaQuery.matches) {
                isModalOpen ? bodyClassList.add('_no-scroll') : bodyClassList.remove('_no-scroll');
            }
        };
        handleResize();

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
            bodyClassList.remove('_no-scroll');
        };
    }, [isModalOpen, dispatch]);

    return (
        <main className="Home">
            {/* <Banner /> */}
            {/* <OfferBanner /> */}
            {/* <AboutUs /> */}
            <Categories open={isModalOpen} setOpen={setIsModalOpen} />
            <CategoriesModel open={isModalOpen} setOpen={setIsModalOpen} product={modelProduct} />
            {/* <Testimonial /> */}
            {/* <Offer /> */}
            {/* <EcoFriendly /> */}
            {/* <Gallery /> */}
            {/* <News /> */}
            {/* <Newsletter /> */}
        </main>
    );
}

export default Home;