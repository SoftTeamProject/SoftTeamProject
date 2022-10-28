import React, { Fragment } from 'react'
import "./cssAdmin.css";


export const AdminListaVentas= () => {
return (
    <Fragment>
        
        <div class="container">


            <div class="jumbotron">
                <div class="container text-center">
                    <h2>Lista de Ventas</h2>
                    <div class="container">
                        <p>Aqui podra encontrar la lista de producotos vendidos con su respectiva Fecha, ID Venta y Valor.</p>
                        <table class="table">
                            <thead>
                                <tr >
                                    <th>Fecha</th>
                                    <th>ID Venta</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>26-07-2022</td>
                                    <td>5678</td>
                                    <td>4.100.990</td>
                                </tr>
                                <tr class="success">
                                    <td>26-07-2022</td>
                                    <td>5677</td>
                                    <td>1.899.990</td>
                                </tr>
                                <tr class="danger">
                                    <td>27-07-2022</td>
                                    <td>4422</td>
                                    <td>1.000.900</td>
                                </tr>
                                <tr class="info">
                                    <td>28-07-2022</td>
                                    <td>5677</td>
                                    <td>1.899.990</td>
                                </tr>
                                <tr class="warning">
                                    <td>28-07-2022</td>
                                    <td>4422</td>
                                    <td>1.000.900</td>
                                </tr>
                                <tr class="active">
                                    <td>29-07-2022</td>
                                    <td>5678</td>
                                    <td>4.100.990</td>
                                </tr>
                                <tr class="active">
                                    <td></td>
                                    <td>Total</td>
                                    <td>----</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Aqui podra encontrar una lista de todos los productos que su tienda
                        virtual Chronoz Technology le oferece ...</p>
                </div>
            </div>
        </div>
    </Fragment>
)
}

export default AdminListaVentas;