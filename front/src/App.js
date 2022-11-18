import './App.css';
import React, { useEffect } from 'react';
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
import { Login } from './components/user/Login';
import { Register } from './components/user/Register';
import { loadUser } from './actions/userActions';
import store from "./store"
import { Profile } from './components/user/Profile';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetails />} />
            <Route path="/Cliente/ListaProductos" element={<ShoppingCart />} />
            <Route path="/admin/productos" element={<ProductList />} />
            <Route path="/productoNuevo" element={<AdminModProduct />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/yo" element={<Profile />} />

            {/*Ruta protegida*/}
            <Route path="/Admin/ListaProductos"
              element={<ProtectedRoute isAdmin={true}><AdminListProduct /></ProtectedRoute>} />

            <Route path="/Admin/ListaVentas"
              element={<ProtectedRoute isAdmin={true}><AdminListaVentas /></ProtectedRoute>} />

            <Route path="/Admin/ModProduct"
              element={<ProtectedRoute isAdmin={true}><AdminModProduct /></ProtectedRoute>} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;