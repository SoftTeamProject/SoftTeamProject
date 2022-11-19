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
import Cart from './components/cart/Cart';// Importacion que cambia de ShoppingCart.js a Cart.js
import { ProductList } from './components/adminAll/ProductList';
import { Login } from './components/user/Login';
import { Register } from './components/user/Register';
import { loadUser } from './actions/userActions';
import store from "./store"
import { Profile } from './components/user/Profile';
import ProtectedRoute from './routes/ProtectedRoute';
import { UpdateProfile } from './components/user/UpdateProfile';
import { UpdatePassword } from './components/user/UpdatePassword';
import { ForgotPassword } from "./components/user/ForgotPassword"
import { NewPassword } from './components/user/NewPassword';
import NewProduct from './components/adminAll/NewProduct';
import { UpdateProduct } from './components/adminAll/UpdateProduct';
import { Shipping } from './components/cart/Shipping';
import { ConfirmOrder } from './components/cart/ConfirmOrder';
import { Payment } from './components/cart/Payment';
import { Success } from './components/cart/Success'
import { ListOrder } from './components/order/ListOrder';
import { OrderDetails } from './components/order/OrderDetails';
import UsersList from './components/adminAll/UserList';
import { useSelector } from 'react-redux';

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  const {user, isAuthenticated, loading} = useSelector(state => state.auth)

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetails />} />
            <Route path="/carrito" element={<Cart />} /> {/*cambio ShoppingCart.js por cart.js*/}
            <Route path="/admin/productos" element={<ProductList />} />
            <Route path="/productoNuevo" element={<AdminModProduct />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetails />} />
            <Route path="/Admin/ListaProductos" element={<AdminListProduct />} />
            <Route path="/Admin/ListaVentas" element={<AdminListaVentas />} />
            <Route path="/Admin/ModProduct" element={<AdminModProduct />} />
            <Route path="/admin/productos" element={<ProductList />} />
            <Route path="/productoNuevo" element={<AdminModProduct />} />
            <Route path="/producto/nuevo" element={<NewProduct />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/yo" element={<Profile />} />
            <Route path="/yo/update" element={<UpdateProfile />} />
            <Route path="/password/update" element={<UpdatePassword />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/resetPassword/:token" element={<NewPassword />} />


            {/*Rutas protegida*/}
            <Route path="/Admin/ListaProductos"
              element={<ProtectedRoute isAdmin={true}><AdminListProduct /></ProtectedRoute>} />

            <Route path="/updateProduct/:id"
              element={<ProtectedRoute isAdmin={true}><UpdateProduct /></ProtectedRoute>} />

            <Route path="/admin/users"
              element={<ProtectedRoute isAdmin={true}><UsersList /></ProtectedRoute>} />

            <Route path="/Admin/ListaVentas"
              element={<ProtectedRoute isAdmin={true}><AdminListaVentas /></ProtectedRoute>} />

            <Route path="/Admin/ModProduct"
              element={<ProtectedRoute isAdmin={true}><AdminModProduct /></ProtectedRoute>} />

            <Route path="/shipping"
              element={<ProtectedRoute><Shipping /></ProtectedRoute>} />

            <Route path="/order/confirm"
              element={<ProtectedRoute><ConfirmOrder /></ProtectedRoute>} />

            <Route path="/payment"
              element={<ProtectedRoute><Payment /></ProtectedRoute>} />

            <Route path="/success"
              element={<ProtectedRoute><Success /></ProtectedRoute>} />

            <Route path="/myOrders"
              element={<ProtectedRoute><ListOrder /></ProtectedRoute>} />

            <Route path="/order/:id"
              element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />

            <Route path="/yo"
              element={<ProtectedRoute><Profile /></ProtectedRoute>} />

            <Route path="/yo/update"
              element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>} />

            <Route path="/password/update"
              element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>} />

          </Routes>
        </div>
        {!loading && (!isAuthenticated || user.role!=="admin") &&(
        <Footer />
       )}
      </div>
    </Router>
  );
}

export default App;