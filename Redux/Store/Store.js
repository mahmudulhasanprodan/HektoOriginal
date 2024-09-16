import { configureStore } from '@reduxjs/toolkit'
import  ProductSlice  from '../Counter/Counter.slice'

export const store = configureStore({
  reducer: {
    Product:ProductSlice,
  },
})