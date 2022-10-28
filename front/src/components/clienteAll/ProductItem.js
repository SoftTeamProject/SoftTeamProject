import React from 'react'
const ProductItem = ({ data, addToCart }) => {
  let { id, nombre, precio } = data;
  return (
    
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      
      <img src='/images/nintendo.jpg' alt="Nintendo jpg" width="150px" ></img>
          
      <h4>{nombre}</h4>
      <h5> ${precio}.00</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default ProductItem;