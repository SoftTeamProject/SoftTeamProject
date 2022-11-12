import React, { Fragment } from 'react'
import "../../App.css"
import { Link } from "react-router-dom"
import { Search } from './Search'


export const Header = () => {
    return (
        <Fragment>
            <nav class="navbar">
                <div className='col-12 col-md-3'>
                    <div>
                        <img src="../images/iconoLogo.png" alt="logo" width="120px"></img>
                    </div>
                </div>

                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                {/*Aqui va buscar*/}
                <Search />
                </div>
                {/*Boton inicio sesión*/} 
                
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <Link to="/login" className='btn ml-4' id="login_btn">Login</Link>
                    <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                            id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Panel de Control</span></Link>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                        </div>
                    </div>

                    <Link to="/Cliente/ListaProductos"><i class="fa fa-cart-arrow-down fa-2x text-white" aria-hidden="false"></i>

                        <span className="ml-1" id="cart_count">7</span></Link>
                </div>
            </nav>
            {/**Segundo Nav */}
            <nav class="navbar">
                <ul class="navbar">
                    
                <div className="ml-4 dropdown d-inline">
                        <Link to="/Home" className="btn dropdown-toggle text-white mr-4" type="button"
                            id="dropDownMenu"  aria-haspopup="true" aria-expanded="false">
                            <span>Home<p><span class="glyphicon glyphicon-home"></span></p></span></Link>
                        
                    </div>

                </ul>
                <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                            id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Modo Administrador<p><span class="glyphicon glyphicon-folder-open"></span></p></span></Link>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                            <Link className="dropdown-item" to="/Home">Home</Link>
                            <Link className="dropdown-item" to="/Admin/Lista">Lista de Productos</Link>
                            <Link className="dropdown-item" to="/productoNuevo">Registrar Producto</Link>
                        </div>
                    </div>
                    
                    <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                            id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Modo Cliente<p><span class="glyphicon glyphicon-user"></span></p></span></Link>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                            <Link className="dropdown-item" to="/">Home</Link>
                            <Link className="dropdown-item" to="/Cliente/ListaProductos">Carrito de Compras</Link>
                            <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                        </div>
                    </div>
            </nav>
        </Fragment>
    )
}
export default Header;