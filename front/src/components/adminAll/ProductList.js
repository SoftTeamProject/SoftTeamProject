import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminProducts, deleteProduct} from '../../actions/productActions'
import { useAlert } from 'react-alert'
import MetaData from '../layout/MetaData'
import { MDBDataTable } from "mdbreact"
import "./cssAdmin.css";

export const ProductList = () => {

    //const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, products } = useSelector(state => state.products)

    const deleteProductHandler = (id) =>{
        const response= window.confirm("Esta seguro de borrar este prodycto ?")
        if(response){
            dispatch(deleteProduct(id))
            //alert.success("Producto eliminado")
            window.location.reload(false)
        }
    }

    useEffect(() => {
        dispatch(getAdminProducts());
        /*if (error) {
                return alert.error(error)
            }
        */
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
                {
                    label: 'Acciones',
                    field: 'acciones',
                },

            ],
            rows: []
        }
        if (products) {
            products.forEach(product => {
                data.rows.push({
                    id: product._id,
                    nombre: product.nombre,
                    precio: `$${product.precio}`,
                    fechaCreacion: product.fechaCreacion,
                    vendedor: product.vendedor,
                    acciones:
                        <Fragment>
                            <Link to={`/producto/${product._id}`} className="btn btn-primary py-1 px-2">
                                <i className="fa fa-eye"></i>
                            </Link><Link to={`/updateProduct/${product._id}`} className="btn btn-warning py-1 px-2">
                                <i class="fa fa-pencil"></i>
                            </Link>

                            <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteProductHandler(product._id)} >
                                <i className="fa fa-trash"></i>
                            </button>
                        </Fragment>
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