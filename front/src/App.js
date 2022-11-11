import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
//Router traido desde react-router-dom (no confundirlo con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Router del front
import { AdminListProduct } from './components/adminAll/AdminListProduct'
import { AdminListaVentas } from './components/adminAll/AdminListaVentas';
import { AdminModProduct } from './components/adminAll/AdminModProduct';
import ShoppingCart from './components/clienteAll/ShoppingCart';
import { ProductList } from './components/adminAll/ProductList';


function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/producto/:id" element={<ProductDetails />}/>
            <Route path="/Admin/ListaProductos" element={<AdminListProduct/>}/>
            <Route path="/Admin/ListaVentas" element={<AdminListaVentas/>}/>
            <Route path="/Admin/ModProduct" element={<AdminModProduct/>}/>
            <Route path="/Cliente/ListaProductos" element={<ShoppingCart/>}/>
            <Route path="/Admin/Lista" element={<ProductList/>}/>
            </Routes>
        </div>
        <Footer />
    </div>
    </Router>
  );
}

export default App;