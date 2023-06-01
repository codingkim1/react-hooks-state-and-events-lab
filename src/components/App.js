import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDark, setisDark]= useState()

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDark ? "App dark" : "App light"
  const appClassChange = isDark ? "dark" : "light"
  function handleClick(){
    setisDark((isDark)=> !isDark);
  }

  return (
    <div className={appClassChange}>
      <header>
        <h2>Shopster</h2>
        {/* <button onClick={handleClick}>Dark Mode</button> */}
        <button onClick={handleClick}>{appClass}</button> 
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
