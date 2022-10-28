import React, { Fragment, useEffect } from 'react'



export const AdminModProduct = () => {
return (
    <Fragment>
            
            <div class="container">
                <div class="container-fluid text-center">
                    <div class="row content">
                        <div class="col-sm-2 sidenav">
                            <br></br>
                            <br></br>
                            <h3>Productos</h3>
                            <p><a href="http://localhost:3000/">Nintendo DS</a></p>
                            <p><a href="http://localhost:3000/">Play Station 5</a></p>
                            <p><a href="http://localhost:3000/">Televisor 55"</a></p>
                            <p><a href="http://localhost:3000/">Telefono Celular</a></p>
                        </div>

                        <div class="col-lg-8 text-left">
                            <h2 >Bienvenido</h2>
                            <p>Aqui podra modificar los atributos de los diferentes productos, que actualmente se
                                encuentran en el inventario de su tienda virtual Chronoz Technology.</p>
                            <hr></hr>

                            <div class="conteiner">
                                <h3 >Nintendo Switch</h3>
                                <div class="row">
                                    <div class="col-lg-4">
                                        <img src="../images/nintendo.jpg" alt="logo" width="200px"></img>
                                    </div>

                                    <div class="col-lg-4">
                                        <div class="container">

                                            <form class="form-horizontal" action="/action_page.php">

                                                <div class="form-group">
                                                    <label class="control-label col-sm-2" for="email">Nombre:</label>
                                                    <div class="col-sm-2">
                                                        <input type="text" class="form-control" id="email" placeholder="Nintendo Switch" name="email"></input>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label col-sm-2" for="pwd">Descripcion:</label>
                                                    <div class="col-sm-2">
                                                        <input type="text" class="form-control" id="pwd" placeholder="" name="pwd"></input>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label col-sm-2" for="pwd">Precio:</label>
                                                    <div class="col-sm-2">
                                                        <input type="text" class="form-control" id="pwd" placeholder="" name="pwd"></input>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label col-sm-2" for="pwd">Stock:</label>
                                                    <div class="col-sm-2">
                                                        <input type="text" class="form-control" id="pwd" placeholder="" name="pwd"></input>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <div class="col-sm-offset-2 col-sm-2">
                                                        <button type="submit" class="btn btn-default">Guardar Cambios</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr></hr>
                            <h3>Informacion del Producto</h3>
                            <p>La consola Nintendo Switch está diseñada para cualquier estilo de vida,
                                transformándose rápidamente de una consola casera a una consola
                                portátil.</p>
                        </div>

                        <div class="col-lg-2 sidenav">
                            <div class="well">
                            <div>
                                <a href='http://localhost:3000/'>
                                <li>
                                <i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="true"></i>
                                <span className="ml-1" id="cart_count" >5</span>
                                </li>
                                Cliente</a>
                                </div>
                                <p></p>
                            </div>
                            <div >
                                <p></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
)
}

export default AdminModProduct
