import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  status: "IDLE"
}

export const ProductSlice= createSlice({
    name: "Product",
    initialState,

    reducers:{
        SetProduct: (state,payload) =>{
          state.value = payload;
        },
    }
})


// Action creators are generated for each case reducer function
export const {SetProduct } = ProductSlice.actions

export default ProductSlice.reducer