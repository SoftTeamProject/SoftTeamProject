import './App.css';
import React from 'react';
import Header from './components/layaout/Header';
import { Footer } from './components/layaout/Footer';
import Home from './components/Home';
//Router traido desde react-router-dom (no confundirlo con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Router del front
import { AdminListProduct } from './components/adminAll/AdminListProduct'
import { AdminListaVentas } from './components/adminAll/AdminListaVentas';
import { AdminModProduct } from './components/adminAll/AdminModProduct';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className='container container-fluid'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Admin/ListaProductos" element={<AdminListProduct/>}/>
        <Route path="/Admin/ListaVentas" element={<AdminListaVentas/>}/>
        <Route path="/Admin/ModProduct" element={<AdminModProduct/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
