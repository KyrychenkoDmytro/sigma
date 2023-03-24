import './App.scss';
import Header from '../Containers/Header/Header';
import Home from '../pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
