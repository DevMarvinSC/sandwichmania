import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDeNosotros';
import Ensaladas from './pages/Ensaladas';
import Sandwiches from './pages/Sandwich';
import MenuInfantil from './pages/MenuInfantil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> {/*Página Por Defecto */}
        <Route path="/AcercaDe" element={<AcercaDe/>} />
        <Route path="/Ensaladas" element={<Ensaladas/>}/>
        <Route path='/Sandwiches' element={<Sandwiches/>}/>
        <Route path='/MenuInfantil' element={<MenuInfantil/>}/>

      </Routes>
    </Router>
  );
}

export default App;
