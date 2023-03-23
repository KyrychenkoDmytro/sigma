import './App.scss';
import Header from '../Containers/Header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='#'/>
      </Routes>
    </div>
  );
}

export default App;
