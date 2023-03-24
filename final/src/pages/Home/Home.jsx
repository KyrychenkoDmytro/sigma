import './Home.scss';
import Banner from '../../Components/Banner/Banner';
import OfferBanner from '../../Components/OfferBanner/OfferBanner';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Categories from '../../Containers/Categories/Categories';

const Home = () => {
    return (
        <main className="Home">
            <Banner />
            <OfferBanner />
            <AboutUs />
            <Categories />
        </main>
    );
}

export default Home;