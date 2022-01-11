import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DetallePelicula from './components/DetallePelicula/DetallePelicula';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:idPeli' element={<DetallePelicula/>}/>
      </Routes>
    </Router>
  );
}

export default App;
