import React, { Fragment, useState } from 'react'
import MetaData from '../layout/MetaData'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registrarProducto, clearErrors } from '../../actions/productActions'


export const AdminModProduct = () => {
   
    return (
        <Fragment>
            
            <div class="container text-center">
                <div class="row">
                

                    {/* Columna izquierda */}
                    <div class="col-lg-3 well">
                        <div class="well">
                            <p><a href="http://localhost:3000">Perfil Administrador</a></p>
                            <img className='card-img-top mx-auto' src='/images/adminIcono.png' alt="Admin"></img>
                        </div>

                        <div class="well">
                            <p><a href="http://localhost:3000">Andres@gmail.com</a></p>
                            <p>
                                <span class="label label-default">Usuario</span>
                            </p>
                        </div>

                        <div class="alert alert-success fade in">
                            <a href="http://localhost:3000" class="close" data-dismiss="alert" aria-label="close">×</a>
                            <p><strong>Ey!</strong></p>
                            People are looking at your profile. Find out who.
                        </div>
                        <p><a href="http://localhost:3000">Link</a></p>
                        
                    </div>

                    {/* Columna central */}
                    <div class="col-sm-7">
                        <h1>Campos para Editar el Producto</h1>
                        <br></br>

                        <div class="row">
                            <div class="col-sm-3">
                                <form class="form-inline">Nombre del Producto:
                                </form>
                            </div>
                            <div class="col-sm-9">
                                <div class="well">
                                <input type="text" class="form-control" size="50" placeholder="Nombre"></input>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-3">
                                <form>Precio:
                                </form>
                            </div>
                            <div class="col-sm-9">
                                <div class="well">
                                <input type="text" class="form-control" size="50" placeholder="Precio"></input>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-3">
                                <form>Descripcion:
                                </form>
                            </div>
                            <div class="col-sm-9">
                                <div class="well">
                                <input type="text" class="form-control" size="50" placeholder="Descripcion"></input>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-3">
                                <form>Calificaciones:
                                </form>
                            </div>
                            <div class="col-sm-9">
                                <div class="well">
                                <input type="text" class="form-control" size="50" placeholder="Descripcion"></input>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-3">
                                <form>Categoria:
                                </form>
                            </div>
                            <div class="col-sm-9">
                                <div class="well">
                                <input type="text" class="form-control" size="50" placeholder="Categoria"></input>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-3">
                                <form>Vendedor:
                                </form>
                            </div>
                            <div class="col-sm-9">
                                <div class="well">
                                <input type="text" class="form-control" size="50" placeholder="Vendedor"></input>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-3">
                                <form>Inventario:
                                </form>
                            </div>
                            <div class="col-sm-9">
                                <div class="well">
                                <input type="text" class="form-control" size="50" placeholder="Inventario"></input>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-3">
                                <form>Numero Calificaciones:
                                </form>
                            </div>
                            <div class="col-sm-9">
                                <div class="well">
                                <input type="text" class="form-control" size="50" placeholder="Calificaciones"></input>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-3">
                                <form>Opiniones:
                                </form>
                            </div>
                            <div class="col-sm-9">
                                <div class="well">
                                <input type="text" class="form-control" size="50" placeholder="Opiniones"></input>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>
                    {/* Columna Derecha */}
                    <div class="col-sm-2 well">
                        <div class="thumbnail">
                            <p><h4>Informacion del Producto</h4></p>
                            <img className='card-img-top mx-auto' src='/images/videojuegos/play5.jpeg' alt="play 5"></img>
                                <p><strong>Play 5</strong></p>
                                <p>Viernes 27 Noviembre 2022</p>
                                <p><strong>$2.999.500</strong></p>
                                <button class="btn btn-primary">Guardar</button>
                        </div>
                        <div class="well">
                            <p>ADS</p>
                        </div>
                    </div>
                

                

                </div>
                
            </div>

        </Fragment>
    )
}

export default AdminModProduct
