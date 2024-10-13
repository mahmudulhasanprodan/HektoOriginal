import { configureStore } from '@reduxjs/toolkit'
import  ProductSlice  from '../Counter/Counter.slice'
import  AddtoCartSlice  from '../AddtoCart/AddtoCartSlice'

export const store = configureStore({
  reducer: {
    Product:ProductSlice,
    Cart:AddtoCartSlice,
  },
})