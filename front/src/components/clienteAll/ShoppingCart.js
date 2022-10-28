import React from 'react'
import { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../../reducer/shoppingReducer'
import { TYPES } from "../../actions/shoppingAction";


import CartItem from './CartItem';
import ProductItem from './ProductItem';



const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, all = false) => {
    //console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <br/>
      <h2 style={{ backgroundColor: "black",color:"white", padding: "1rem" }}>Carrito de Compras</h2>
      
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <article className='box'>

      <h3 style={{ backgroundColor: "black",color:"white", padding: "1rem" }}>Lista de Productos Seleccionados</h3>
        <button class="btn btn-danger" onClick={clearCart}>Cancelar Compra</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
        <button type='button' class="btn btn-info">Finalizar Compra</button>
      </article>

    
      
    </div>
  );
};

export default ShoppingCart;