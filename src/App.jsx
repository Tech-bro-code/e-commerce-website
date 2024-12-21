import { RouterProvider } from "react-router-dom";
import { router } from "./layout/router";
import { CartProvider } from "./context/CartContext";
import ProductCard from "./componenets/ProductCard";
import Cart from "./componenets/Cart";

const App = () => {
  return (
    <>
    <div>
     <CartProvider>
       {/* <ProductCard /> */}
      {/* <Cart />  */}
      <RouterProvider router={router} />
      </CartProvider>
    </div>
    </>
  )

}

export default App;