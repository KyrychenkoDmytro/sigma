import './App.scss';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
