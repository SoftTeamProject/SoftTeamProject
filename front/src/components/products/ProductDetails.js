import React, { Fragment } from 'react'
import MetaData from "../layout/MetaData"
export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Consola video juegos Nintendo"></MetaData>
        <div>
            <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                <img src="../images//videojuegos/nintendo.jpeg" alt="imagen productDetails" height="450" width="450"></img>
            </div>

            <div className='col-12 col-lg-5 mt-5'>
                <h3>Producto en product details dummy</h3>
                <p id="product_id">Product #767553</p>
            </div>
        </div>
    </Fragment>
  )
}


