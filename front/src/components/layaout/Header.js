import React, { Fragment } from 'react'
import "./cssAdmin.css";
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Fragment>
        
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav" >
                                <li >
                                    <div>
                                        <img src="./images/iconoLogo.png" alt="logo" width="100px"></img>
                                    </div>
                                </li>
                                
                                <li class="active"><a href="http://localhost:3000">Modificar Productos</a></li>
                                <li><a href="http://localhost:3000/Admin/ListaProductos">Lista Productos</a></li>
                                <li><a href="http://localhost:3000/Admin/ListaVentas">Lista Ventas</a></li>
                                <ul class="nav navbar-nav navbar-right">
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <Link to={`/Cliente/ListaProductos`}> <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i>
                                <span className="ml-1" id="cart_count" >5 </span></Link>
                                </div> 
                                
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <li><a href="http://localhost:3000/"><span class="glyphicon glyphicon-log-in"></span> Iniciar Sesion</a></li>
                                </ul>
                            </ul>

                            
                        </div>
                    </div>
                </nav>
            </div>
        
        </Fragment>
    )
}

export default Header