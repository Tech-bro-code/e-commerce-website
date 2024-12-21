import {createBrowserRouter} from 'react-router-dom';
import LandingPage from '../componenets/LandingPage';
import ProductCard from '../componenets/ProductCard';
import CheckoutPage from '../componenets/CheckoutPage';
import Cart from '../componenets/Cart';
import Receipt from '../componenets/Receipt';

export const router = createBrowserRouter([
{
    path:"/",
    element: <LandingPage />,
},
{
    path:"/products",
    element: <ProductCard />,
},
{
    path:"/checkout",
    element: <CheckoutPage />,
},
{
    path:"/receipts",
    element: <Receipt />,
},
{
    path:"/carticon",
    element: <Cart />
},
    

]);