import React from 'react'
import Home from './Pages/Home/Home'
import RootElement from './RootElement/RootElement';
import Shop from './Pages/Shop/Shop';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootElement />}>
      <Route index element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
