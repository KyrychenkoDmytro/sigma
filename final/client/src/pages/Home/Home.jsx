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

        useEffect(() => {
        const bodyClassList = document.body.classList;
        bodyClassList.remove('_no-scroll');

        dispatch(checkHeaderVisibility(isModalOpen));
        isModalOpen ? bodyClassList.add('_no-scroll') : bodyClassList.remove('_no-scroll');

        return () => {
            bodyClassList.remove('_no-scroll');
        };
    }, [isModalOpen, dispatch]);

    return (
        <main className="Home">
            <Banner />
            <OfferBanner />
            <AboutUs />
            <Categories open={isModalOpen} setOpen={setIsModalOpen} />
            <CategoriesModel open={isModalOpen} setOpen={setIsModalOpen} product={modelProduct} />
            <Testimonial />
            <Offer />
            <EcoFriendly />
            <Gallery />
            <News />
            <Newsletter />
        </main>
    );
}

export default Home;