import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './pages/HomeScreen';
import AboutScreen from './pages/AboutScreen';
 
const App = () => {
  return (
    <Router>
      <Navbar />
      <h1>Bootstrap Sass</h1>

      <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about' element={<AboutScreen />} />
          
          {/**Ruta para páginas que no existen */}
          <Route path='*' element={<h1>Pagina No existe</h1>} />
      </Routes>
    </Router>
  );
}
 
export default App;
