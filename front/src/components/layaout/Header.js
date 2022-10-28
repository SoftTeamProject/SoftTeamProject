import React, { Fragment } from 'react'
import "./cssAdmin.css";
import ReactDOM from 'react-dom/client';


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