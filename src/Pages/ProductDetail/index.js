import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartIcon, HeartIcon, StarIcon } from "@heroicons/react/solid";
import Spinner from "../../Components/Spinner";
import { useProduct } from "../../Context/ProductContext";
import { useCart } from "../../Context/CartContext";
import { useFavorite } from "../../Context/FavoriteContext";
import styles from "./styles.module.css";

const ProductDetail = () => {
  const {addToCart,items} = useCart()
  const {addToFavorite, favoriteItems} = useFavorite()
  const {product, loading, setProductID} = useProduct()
  const {product_id} = useParams()
  const findFavoriteItem = favoriteItems.find((item)=>{
      return item.id === product.id
  })
  const findCartItem = items.find((item)=> {
    return item.id===product.id
  })
  useEffect(()=>{
    setProductID(product_id)
  },[]);
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
  return (
    <>
      {!loading && product?.id ? (
          <div className="flex flex-wrap max-w-7xl mx-auto my-4">
            <div className="w-full sm:w-2/2 md:w-2/2 xl:w-5/5 p-4 flex flex-wrap">
              <img
                alt="ecommerce"
                className={styles.image}
                src={product.image}
              />
              <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 my-auto">
                <h2 className={styles.brand}>
                  BRAND
                </h2>
                <h1 className="text-slate-100 text-2xl font-bold tracking-tight mb-1">
                  {product.title}
                </h1>
                <div className={styles.rating} title={product?.rating?.rate}>
                  {[...Array(Math.round(product?.rating?.rate))].map((e, i) => (
                    <StarIcon
                      key={`star-${i}`}
                      className={styles.starIcon}
                      aria-hidden="true"
                    />
                  ))}
                  {[...Array(5 - Math.round(product?.rating?.rate))].map(
                    (e, i) => (
                      <StarIcon
                        key={`empty-star-${i}`}
                        className={styles.emptyStarIcon}
                        aria-hidden="true"
                      />
                    )
                  )}
                  <p className="text-xs ml-1 font-light mt-0.5">
                    ({product?.rating?.count})
                  </p>
                </div>
                <p className={styles.productDetailText}>
                  {product.description}
                </p>
                <div className="flex">
                  <div className="my-auto">
                    <span className="font-normal text-3xl text-yellow-400 inline-block align-middle mt-2 my-auto">
                      $ {product.price}
                    </span>
                  </div>
                  <div className="block ml-auto my-auto mt-0">
                    {" "}
                    <div className={styles.addToCart}>
                      <button
                        className={styles.addToCartButton}
                        onClick={() => addToCart(product, findCartItem)}
                      >
                        <ShoppingCartIcon
                          className={styles.shoppingCartIcon}
                          aria-hidden="true"
                        />

                        <div className="flex flex-col self-center">
                          <span className={styles.buttonText}>
                            {findCartItem ? "Remove from cart" : "Add to Cart"}
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="block my-auto">
                    <button
                      className={
                        !findFavoriteItem
                          ? styles.favButton
                          : styles.removeFavButton
                      }
                      onClick={() => {
                        addToFavorite(product, findFavoriteItem);
                      }}
                    >
                      <HeartIcon className={styles.heartIcon} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ProductDetail;
