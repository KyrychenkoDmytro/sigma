import './Home.scss';
import Banner from '../../Components/Banner/Banner';
import OfferBanner from '../../Components/OfferBanner/OfferBanner';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Categories from '../../Containers/Categories/Categories';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Offer from '../../Components/Offer/Offer';

const Home = () => {
    return (
        <main className="Home">
            {/* <Banner /> */}
            {/* <OfferBanner /> */}
            {/* <AboutUs /> */}
            {/* <Categories /> */}
            {/* <Testimonial /> */}
            <Offer />
        </main>
    );
}

export default Home;