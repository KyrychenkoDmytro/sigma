import './Home.scss';
import Banner from '../../Components/Banner/Banner';
import OfferBanner from '../../Components/OfferBanner/OfferBanner';
import AboutUs from '../../Components/AboutUs/AboutUs';

const Home = () => {
    return (
        <main className="Home">
            <Banner />
            <OfferBanner />
            <AboutUs />
        </main>
    );
}

export default Home;