import React, { Fragment } from 'react'
import "../../App.css"
import { Link } from "react-router-dom"
import { Search } from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from "../../actions/userActions"

const Header = () => {
    const {cartItems} = useSelector(state=>state.cart)
    
    const alert= useAlert();
    const dispatch= useDispatch();

    const { user, loading } = useSelector(state => state.auth)

    const logoutHandler = () =>{
        dispatch(logout());
        alert.success("LogOut exitoso")
    }

    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div>
                        <img src="../images/iconoLogo.png" alt="logo" width="120px"></img>
                    </div>
                </div>

                <div className='col-12 col-md-3 mt-2 mt-md-0'>
                    {/*Aqui va buscar*/}
                    <Search />
                </div>
                {/*Boton inicio sesión*/}
                <div className="col-12 col-md-4 mt-4 mt-md-0 text-center">
                    <Link to="/carrito"><i class="fa fa-cart-arrow-down fa-2x text-white" aria-hidden="false"></i>
                        <span className="ml-1" id="cart_count">{cartItems.length}</span></Link>

                         
                    {user ? (
                        <div className="ml-4 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                                id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <figure className='avatar avatar-nav'>
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.nombre}
                                        className="rounded-circle"></img>
                                </figure>
                                <span>{user && user.nombre}</span>
                            </Link>

                            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                                {/*Preguntamos el rol de quien esta online*/}
                                {user && user.role === "admin" && (
                                    <Link className="dropdown-item" to="/adminAll">Perfil Administrador</Link>
                                )}

                                <Link className="dropdown-item" to="/myOrders">Mis Pedidos</Link>
                                <Link className="dropdown-item" to="/yo">Mi Perfil</Link>
                                <Link className="dropdown-item" to="/" onClick={logoutHandler}>Cerrar Sesion</Link>
                            </div>
                        </div>
                    ) : !loading && <Link to="/login" className='btn ml-4' id="login_btn">Iniciar Sesion</Link>}

                </div>
            </nav>

            {/**Segundo Nav */}
            <nav class="navbar">
                <ul class="navbar">

                    <div className="ml-4 dropdown d-inline">
                        <Link to="/Home" className="btn dropdown-toggle text-white mr-4" type="button"
                            id="dropDownMenu" aria-haspopup="true" aria-expanded="false">
                            <span>Home<p><span class="glyphicon glyphicon-home"></span></p></span></Link>
                    </div>
                </ul>

                <div className="ml-4 dropdown d-inline">
                    <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                        id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>Modo Administrador<p><span class="glyphicon glyphicon-folder-open"></span></p></span></Link>
                    <div className='dropdown-menu' aria-labelledby='dropDownMenu'>

                        {/*Preguntamos el rol de quien esta online*/}
                        {user && user.role === "admin" && (
                            <Link className="dropdown-item" to="/Home">Home</Link>
                        )}
                        {user && user.role === "admin" && (
                            <Link className="dropdown-item" to="/admin/productos">Lista de Productos</Link>
                        )}
                        {user && user.role === "admin" && (
                            <Link className="dropdown-item" to="/producto/nuevo">Registrar Producto</Link>
                        )}
                    </div>
                </div>

                <div className="ml-4 dropdown d-inline">
                    <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                        id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>Modo Cliente<p><span class="glyphicon glyphicon-user"></span></p></span></Link>
                    <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                        <Link className="dropdown-item" to="/">Home</Link>
                        <Link className="dropdown-item" to="/carrito">Carrito de Compras</Link>
                        <Link className="dropdown-item" to="/" onClick={logoutHandler}>Cerrar Sesion</Link>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
export default Header;