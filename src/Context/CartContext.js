import { useState, createContext, useContext, useEffect } from 'react'

const CartContext = createContext()

const defaultCart = JSON.parse(localStorage.getItem('cart')) || []

const CartProvider = ({children}) => {

  /**
   * 1. Create a state variable called items and a function to update it called setItems that is initialized to the defaultCart
   * 2. Create a useEffect hook that will run when the items state variable changes
   * 3. The useEffect hook should set the cart key in localStorage to the items state variable
   * 4. Create a function called addToCart that takes in two parameters, data and findCartItem
   * 5. If findCartItem is falsy, return the setItems function and pass in a function that will return an array with the data parameter and the items state variable
   * 6. If findCartItem is truthy, create a variable called filtered that will filter the items state variable and return all items that do not have an id that matches the findCartItem id
   * 7. Return the setItems function and pass in the filtered variable
   * 8. Create a function called removeFromCart that takes in an item_id parameter
   * 9. Create a variable called filtered that will filter the items state variable and return all items that do not have an id that matches the item_id parameter
   * 10. Return the setItems function and pass in the filtered variable
   * 11. Create a variable called values that will hold an object with the items, setItems, addToCart, and removeFromCart functions
   * 12. Return the CartContext.Provider and pass in the values variable
   */

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }