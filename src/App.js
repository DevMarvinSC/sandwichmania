import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import AcercaDe from './pages/AcercaDeNosotros';
import Ensaladas from './pages/Ensaladaas';
import Sandwiches from './pages/Sandwich';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> {/*Página Por Defecto */}
        <Route path='/AcercaDe' element={<AcercaDe/>} />
        <Route path='/Ensaladas' element={<Ensaladas/>}/>
        <Route path='/Sandwiches' element={<Sandwiches/>}/>

      </Routes>
    </Router>
  );
}

export default App;
