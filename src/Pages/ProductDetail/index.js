import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon, StarIcon } from "@heroicons/react/solid";
import Spinner from "../../Components/Spinner";
import { useProduct } from "../../Context/ProductContext";
import { useCart } from "../../Context/CartContext";
import { useFavorite } from "../../Context/FavoriteContext";
import styles from "./styles.module.css";

const ProductDetail = () => {

  /**
   * Hints:
   * 1. Get addToCart, items, addToFavorite, favoriteItems from useCart and useFavorite
   * 2. Get product, loading, setProductID from useProduct
   * 3. Get product_id from useParams
   * 4. Call setProductID with product_id as argument
   * 5. Use the product object to display the product details
   * 6. Use the findCartItem and findFavoriteItem to check if the product is in the cart or favorite
   * 7. Use the addToCart and addToFavorite functions to add the product to the cart or favorite
   */
  
};

export default ProductDetail;
