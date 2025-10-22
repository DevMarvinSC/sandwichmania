import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Componentes
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} /> {/*Página Por Defecto */}
      </Routes>
    </Router>
  );
}

export default App;
