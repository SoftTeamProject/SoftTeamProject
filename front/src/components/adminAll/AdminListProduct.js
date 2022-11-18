import React, { Fragment } from 'react'
import "./cssAdmin.css";

export const AdminListProduct = () => {
    return (
        <Fragment>
            <div class="container">

                <div class="jumbotron" >
                    <div class="container text-center">
                        <h1>Bienvenidos</h1>
                        <p>Aqui podra encontrar una lista de todos los productos que su tienda
                            virtual Chronoz Technology le oferece ...</p>
                    </div>
                </div>

                <div class="container-fluid bg-3 text-center">
                    <div class="row">

                        {/*-- Producto 1-->*/}
                        <div class="col-lg-3">
                            <img src='/images/nintendo.jpg' alt="Nintendo jpg" width="150px" ></img>
                            <div className='card-body d-flex flex-colum'>
                                <h5 id="titulo_producto" ><a href='http://localhost:3000'>Nintendo consola</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'></div>
                                </div>
                                <span id="No_de_opiniones"> 77 reviews</span>
                            </div>
                            <p className='card-text'>$999.990</p><a href='http://localhost:3000' id="view_btn" className='btn btn_block'>Ver detalles del producto</a>
                        </div>
                        {/*-- Producto 2-->*/}
                        <div class="col-lg-3">
                            <img src='/images/play5.jpg' alt="Play 5" width="250px"></img>
                            <div className='card-body d-flex flex-colum'>
                                <h5 id="titulo_producto" ><a href='http://localhost:3000'>Play 5 Consola</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'></div>
                                </div>
                                <span id="No_de_opiniones"> 84 reviews</span>
                            </div>
                            <p className='card-text'>$1.000.990</p><a href='http://localhost:3000' id="view_btn" className='btn btn_block'>Ver detalles del producto</a>
                        </div>
                        {/*-- Producto 3-->*/}
                        <div class="col-lg-3">
                            <img src='/images/tv.jpg' alt="Nintendo jpg" width="150px"></img>
                            <div className='card-body d-flex flex-colum'>
                                <h5 id="titulo_producto" ><a href='http://localhost:3000'>Televisor 50"</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'></div>
                                </div>
                                <span id="No_de_opiniones"> 238 reviews</span>
                            </div>
                            <p className='card-text'>$4.100.990</p><a href='http://localhost:3000' id="view_btn" className='btn btn_block'>Ver detalles del producto</a>
                        </div>
                        {/*-- Producto 4-->*/}
                        <div class="col-lg-3">
                            <img src='/images/telefono.jpg' alt="Nintendo jpg" width="150px"></img>
                            <div className='card-body d-flex flex-colum'>
                                <h5 id="titulo_producto" ><a href='http://localhost:3000'>Telefono Celular</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'></div>
                                </div>
                                <span id="No_de_opiniones"> 137 reviews</span>
                            </div>
                            <p className='card-text'>$1.899.990</p><a href='http://localhost:3000' id="view_btn" className='btn btn_block'>Ver detalles del producto</a>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminListProduct;