import React from 'react'
import Home from './Pages/Home/Home'
import RootElement from './RootElement/RootElement';
import Shop from './Pages/Shop/Shop';
import ProductDetails from './ShopComponent/ProductDetails/ProductDetails';
import Account from './Pages/Account/Account';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import Cart from './Pages/Cart/Cart';
import SignUp from './Pages/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';



import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootElement />}>
      <Route index element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route
        path="/product-details/:productId"
        element={<ProductDetails />}
      ></Route>
      <Route path="/account" element={<Account />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/error" element={<Error />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/registration" element={<SignUp />}></Route>
    </Route>
  )
);

const App = () => {



  
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App
