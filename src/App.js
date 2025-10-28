import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './components/CarritoContext';
import Carrito from './components/Carrito';


// Pages
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDeNosotros';
import Sandwiches from './pages/Sandwich';
import MenuInfantil from './pages/MenuInfantil';
import Checkout from './components/Checkout';

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Carrito />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AcercaDe" element={<AcercaDe/>} />
          <Route path="/Sandwiches" element={<Sandwiches/>} />
          <Route path="/MenuInfantil" element={<MenuInfantil/>} />
          <Route path="/checkout" element={<Checkout/>} />

        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;