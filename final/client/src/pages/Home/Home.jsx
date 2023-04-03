import './Home.scss';
import Banner from '../../Components/Banner/Banner';
import OfferBanner from '../../Components/OfferBanner/OfferBanner';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Categories from '../../Containers/Categories/Categories';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Offer from '../../Components/Offer/Offer';
import EcoFriendly from '../../Components/EcoFriendly/EcoFriendly';
import Gallery from '../../Components/Gallery/Gallery';
import News from '../../Components/News/News';
import Newsletter from '../../Components/Newsletter/Newsletter';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/slices/products';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <main className="Home">
            <Banner />
            <OfferBanner />
            <AboutUs />
            <Categories />
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