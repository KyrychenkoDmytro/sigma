import './App.scss';
import Header from '../Containers/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import BannerAfterOrder from '../pages/BannerAfterOrder/BannerAfterOrder';
import Orders from '../pages/Orders/Orders';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/thanks' element={<BannerAfterOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
