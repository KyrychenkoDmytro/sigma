import './App.scss';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
