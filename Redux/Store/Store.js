import { configureStore } from '@reduxjs/toolkit'
import  ProductSlice  from '../Counter/Counter.slice'
import  AddtoCartSlice, { Gettotal }  from '../AddtoCart/AddtoCartSlice'

export const store = configureStore({
  reducer: {
    Product:ProductSlice,
    Cart:AddtoCartSlice,
  },
})

store.dispatch(Gettotal());