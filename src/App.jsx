import React from 'react'
import Home from './Pages/Home/Home'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />}></Route>
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