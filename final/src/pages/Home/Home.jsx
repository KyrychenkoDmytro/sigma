import './Home.scss';
import Banner from '../../Components/Banner/Banner';
import OfferBanner from '../../Components/OfferBanner/OfferBanner';

const Home = () => {
    return (
        <main className="Home">
            <Banner />
            <OfferBanner />
        </main>
    );
}

export default Home;