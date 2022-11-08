import React, { Fragment, useEffect } from 'react'
import Metadata from './layaout/Metadata'
import {useDispatch} from 'react-redux'
import { getProducts } from '../actions/productActions'

export const Home = () => {
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getProducts());
    })

  return (
    <Fragment>
        <Metadata title="La mejor tienda virtual de electrodomesticos"></Metadata>
        <h1 id="encabezado_productos">Ultimos Productos</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {/* Producto 1*/ }
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/play5.jpg' alt="Nutra gold"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='#'>Play 5</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 65 reviews</span>
                            </div>
                            <p className='card-text'>$1.995.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                        </div>
                    </div>
                </div>
                {/* Producto 2*/ }
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/play5.jpg' alt="Nutra gold"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='#'>Play 5</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 76 reviews</span>
                            </div>
                            <p className='card-text'>$1.995.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                        </div>
                    </div>
                </div>
                {/* Producto 3*/ }
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/play5.jpg' alt="Nutra gold"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='#'>Play 5</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 5 reviews</span>
                            </div>
                            <p className='card-text'>$7.005.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                        </div>
                    </div>
                </div>
                {/*Producto 4*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/nintendo.jpg' alt="Nutra Nuggets Profesional"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Play 5</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 7 reviews</span>
                                </div>
                                <p className='card-text'>$2.855.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>

            </div>
        </section>

    </Fragment>
  )
}
export default Home