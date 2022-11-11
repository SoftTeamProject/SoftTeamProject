import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productActions'
//import { useAlert } from 'react-alert'
import MetaData from '../layout/MetaData'
import { MDBDataTable } from "mdbreact"
import "./cssAdmin.css";

export const ProductList = () => {

    const { loading, productos, error } = useSelector(state => state.products)
    //const alert = useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        /*if (error) {
                return alert.error(error)
            }
        */
        dispatch(getProducts());
    }, [dispatch])

    //FUNCION QUE TRAE UNA SUBLISTA DE LA BASE DE DATOS
    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Nombre del Producto',
                    field: 'nombre',
                    sort: 'asc'
                },
                {
                    label: 'Precio',
                    field: 'precio',
                    sort: 'asc'
                },
                {
                    label: 'Fecha Creacion',
                    field: 'fechaCreacion',
                    sort: 'asc'
                },
                {
                    label: 'Vendedor',
                    field: 'vendedor',
                    sort: 'asc'
                },

            ],
            rows: []
        }
        if (productos) {
            productos.forEach(product => {
                data.rows.push({
                    id: product._id,
                    nombre: product.nombre,
                    precio: `$${product.precio}`,
                    fechaCreacion: product.fechaCreacion,
                    vendedor: product.vendedor
                })
            })
        }
        return data;
    }

    return (

        <Fragment>
            <MetaData title={'Lista de productos Vendidos'} />
            <div class="container">


                <div class="jumbotron">
                    <div className="row">

                        <div className="col-12 col-md-12">
                            <Fragment>
                                <h2 class="container text-center">Lista de productos Vendidos</h2>
                                {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
                                    <MDBDataTable
                                        data={setProducts()}
                                        className="px-4"
                                        searchLabel="Search Product"
                                        bordered
                                        striped
                                        theadColor="blue lighten-1"
                                        
                                        hover
                                    />
                                )}
                            </Fragment>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductList