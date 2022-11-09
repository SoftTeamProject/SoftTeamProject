import React, { Fragment, useEffect } from 'react'


export const AdminModProduct = () => {
    return (
        <Fragment>
            
            <div class="container text-center">
                <div class="row">
                

                    {/* Columna izquierda */}
                    <div class="col-lg-3 well">
                        <div class="well">
                            <p><a href="#">Perfil Administrador</a></p>
                            <img className='card-img-top mx-auto' src='/images/adminIcono.png' alt="Admin"></img>
                        </div>

                        <div class="well">
                            <p><a href="#">Andres@gmail.com</a></p>
                            <p>
                                <span class="label label-default">Usuario</span>
                            </p>
                        </div>

                        <div class="alert alert-success fade in">
                            <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>
                            <p><strong>Ey!</strong></p>
                            People are looking at your profile. Find out who.
                        </div>
                        <p><a href="#">Link</a></p>
                        
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

                        <div class="row">
                            <div class="col-sm-3">
                                <div class="well">
                                    <p>Jane</p>
                                    <img className='card-img-top mx-auto' src='./images/play5.jpg' alt="Nutra gold"></img>
                                </div>
                            </div>
                            <div class="col-sm-9">
                                <div class="well">
                                    <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>
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
            )

        </Fragment>
    )
}

export default AdminModProduct
