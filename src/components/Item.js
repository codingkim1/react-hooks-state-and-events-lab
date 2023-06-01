import React, { useState } from "react";

function Item({ name, category }) {
   const [cartItems, setcartItems]=useState(true)

   function handleLiClick(){
    setcartItems((cartItems)=> !cartItems)
   
   }
    const addToCart= cartItems ? "Add to Cart" : "Remove from Cart"
    const addedToCart= cartItems ?  " " : "in-cart"

  return (
    <li className={addedToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleLiClick}>{addToCart}</button>
    </li>
  );
}

export default Item;
