import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        <h1 id="encabezado_producto">Productos nuevos</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {/*Producto 1*/ }
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <img className='card-img-top mx-auto' src='./images/nintendo.jpg' alt="Nintendo jpg"></img>
                    <div className='card-body d-flex flex-colum'>
                        <h5 id="titulo_producto" ><a href='http://localhost:3000'>Nintendo consola</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'></div>
                        </div>
                        <span id="No_de_opiniones"> 15 reviews</span>
                    </div>
                    <p className='card-text'>$999.990</p><a href='http://localhost:3000' id="view_btn" className='btn btn_block'>Ver detalles del producto</a>
                </div>

                {/*Producto 2*/ }
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <img className='card-img-top mx-auto' src='./images/play5.jpg' alt="play jpg"></img>
                    <div className='card-body d-flex flex-colum'>
                        <h5 id="titulo_producto" ><a href='http://localhost:3000'>Play 5 consola</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'></div>
                        </div>
                        <span id="No_de_opiniones"> 88 reviews</span>
                    </div>
                    <p className='card-text'>$1.599.990</p><a href='http://localhost:3000' id="view_btn" className='btn btn_block'>Ver detalles del producto</a>
                </div>

                {/*Producto 3*/ }
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <img className='card-img-top mx-auto' src='./images/telefono.jpg' alt="telefono jpg"></img>
                    <div className='card-body d-flex flex-colum'>
                        <h5 id="titulo_producto" ><a href='http://localhost:3000'>telefono</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'></div>
                        </div>
                        <span id="No_de_opiniones"> 133 reviews</span>
                    </div>
                    <p className='card-text'>$800.990</p><a href='http://localhost:3000' id="view_btn" className='btn btn_block'>Ver detalles del producto</a>
                </div>

                {/*Producto 4*/ }
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <img className='card-img-top mx-auto' src='./images/tv.jpg' alt="tv jpg"></img>
                    <div className='card-body d-flex flex-colum'>
                        <h5 id="titulo_producto" ><a href='http://localhost:3000'>Televisor 55"</a></h5>
                        <div className='rating mt-auto'>
                            <div className='rating-outer'></div>
                        </div>
                        <span id="No_de_opiniones"> 301 reviews</span>
                    </div>
                    <p className='card-text'>$2.800.990</p><a href='http://localhost:3000' id="view_btn" className='btn btn_block'>Ver detalles del producto</a>
                </div>
            </div>

        </section>
    </Fragment>
  )
}

export default Home