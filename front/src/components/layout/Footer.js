import React, { Fragment } from 'react'

export const Footer = () => {

  return (
    <Fragment>
       
        <footer className="pie-pagina">
            <div class="grupo-1">
                <div class="box">
                  <figure>
                    <a href="http://localhost:3000">
                      <img src="./images/logoCronoz.png" alt="Logo Chronoz"></img>
                    </a>
                  </figure>
                </div>
                <div class="box" align="center">
                  <h2>SOBRE NOSOTROS</h2>
                    <p>Tienda virtual especializada en tecnología</p>
                    <p>que ofrece la posibilidad de compra en línea.</p>
                </div>
                <div className="box" align="center">
                    <h2>SIGUENOS</h2>
                      <div class="red-social">
                        <a href="http://localhost:3000" class="fa fa-facebook"></a>
                        <a href="http://localhost:3000" class="fa fa-instagram"></a>
                        <a href="http://localhost:3000" class="fa fa-youtube"></a>
                        <a href="http://localhost:3000" class="fa fa-twitter"></a>
                    </div>
                </div>
            </div>
            <div>
              <p className='grupo-2' align="center">
              <small> &copy; 2022 <b> Chronoz Technologies </b> - Todos los Derechos Reservados.</small>
              </p>
            </div>
        </footer>
        </Fragment>
  )
}

export default Footer