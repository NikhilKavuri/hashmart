import { useState, createContext, useContext, useEffect } from 'react'

const FavoriteContext = createContext()

const defaultFavorite = JSON.parse(localStorage.getItem('favorite')) || []

const FavoriteProvider = ({children}) => {
  const [favoriteItems, setFavoriteItems] = useState(defaultFavorite);
  useEffect(()=>{
      localStorage.setItem('favorite',JSON.stringify(favoriteItems))
  },[favoriteItems]);
  const addToFavorite = (data, findFavoriteItem)=>{
    if (!findFavoriteItem) {
      return setFavoriteItems((prevItems) => [data, ...prevItems]);
    }
    const filtered = favoriteItems.filter((favoriteItems)=>favoriteItems.id !== findFavoriteItem.id)     
    setFavoriteItems(filtered);
  }
    const removeFromFavorite = (item_id)=>{
      const filtered = favoriteItems.filter((favoriteItems)=> favoriteItems.id !== item_id)
      setFavoriteItems(filtered);
    }
    const values = {
      favoriteItems, setFavoriteItems,addToFavorite,removeFromFavorite
    }
    return <FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>
  }
  /**
   * 1. Create a state variable called favoriteItems and a function to update it called setFavoriteyItems that is initialized to the defaultFavorite
   * 2. Create a useEffect hook that will run when the favoriteItems state variable changes
   * 3. The useEffect hook should set the favorite key in localStorage to the favoriteItems state variable
   * 4. Create a function called addToFavorite that takes in two parameters, data and findFavoriteItem
   * 5. If findFavoriteItem is falsy, return the setFavoriteItems function and pass in a function that will return an array with the data parameter and the favoriteItems state variable
   * 6. If findFavoriteItem is truthy, create a variable called filtered that will filter the favoriteItems state variable and return all items that do not have an id that matches the findFavoriteItem id
   * 7. Return the setFavoriteItems function and pass in the filtered variable
   * 8. Create a function called removeFromFavorite that takes in an item_id parameter
   * 9. Create a variable called filtered that will filter the favoriteItems state variable and return all items that do not have an id that matches the item_id parameter
   * 10. Return the setFavoriteItems function and pass in the filtered variable
   * 11. Create a variable called values that will hold an object with the favoriteItems, setFavoriteItems, addToFavorite, and removeFromFavorite functions
   * 12. Return the FavoriteContext.Provider and pass in the values variable
   */

const useFavorite = () => useContext(FavoriteContext)

export { FavoriteProvider, useFavorite }