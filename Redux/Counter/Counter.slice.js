import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const ApiStatus = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  ERROR: "ERROR",
}

const initialState = {
  value: [],
  status: ApiStatus.IDLE,
}

export const ProductSlice= createSlice({
    name: "Product",
    initialState,

    reducers:{
        SetProduct: (state,payload) =>{
          state.value = payload;
        },
        SetStatus: (state,payload) => {
          state.status = payload;
        }
    }
})


// Thunk function here 

export const FeatureProductData = () => {
    return async function GetProduct(dispatch,getState) {
       try {
        dispatch(SetStatus(ApiStatus.LOADING));
        const response = await axios.get("https://dummyjson.com/products");
         dispatch(SetProduct(response.data));
         dispatch(SetStatus(ApiStatus.IDLE));
       } catch (error) {
        console.log(error);
        dispatch(SetStatus(ApiStatus.ERROR));
       }
    } 
};

// Action creators are generated for each case reducer function
export const {SetProduct,SetStatus } = ProductSlice.actions

export default ProductSlice.reducer