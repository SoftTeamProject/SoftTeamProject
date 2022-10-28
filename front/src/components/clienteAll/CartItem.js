import React from 'react';
import "./cssAdmin.css";

const CartItem = ({ data, delFromCart }) => {
    let { id, nombre, precio, quantity } = data;
  
    return (
      
      <div style={{ borderBottom: "thin solid gray" }}>

        
          <lu class="list-group list-group-horizontal">
            <li class="list-group-item  ">
            <img src='/images/nintendo.jpg' alt="Nintendo jpg" width="150px" ></img>
            
            </li>
            <li class="list-group-item  font-weight-bold"> {nombre}</li>
            
            <li class="list-group-item lead  ">PRECIO:  $ {precio}.00</li>
            <li class="list-group-item lead ">CATIDAD:  {quantity}</li>
            <li class="list-group-item lead ">SUB TOTAL:  ${precio* quantity}.00</li>
            <li class="list-group-item "><button class= "btn btn-outline-danger" onClick={() => delFromCart(id)}>Eliminar Uno</button></li>
            <li class="list-group-item"><button class= "btn btn-outline-danger" onClick={() => delFromCart(id, true)}>Eliminar Todos</button></li>
          </lu>
      </div>
    
    );
  };
  
  export default CartItem;