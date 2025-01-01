import { createSlice } from '@reduxjs/toolkit'
import {toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
  CartItem: localStorage.getItem("CartItem")
    ? JSON.parse(localStorage.getItem("CartItem"))
    : [],
  TotalCartItem: 0,
  TotalAmount: 0,
};


  export const AddtoCartSlice = createSlice({
    name: "AddtoCart",
    initialState,

    reducers: {
      CartItem: (state, action) => {
        const FindIndex = state.CartItem.findIndex(
          (item) => item.id === action.payload.id
        );
        console.log(FindIndex);
        
        if (FindIndex >= 0) {
          state.CartItem[FindIndex].cartQuantity += 1;
          localStorage.setItem("CartItem", JSON.stringify(state.CartItem));
          toast(`${action.payload.title} Again Added`, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else {
          state.CartItem.push({ ...action.payload, cartQuantity: 1 });
          localStorage.setItem("CartItem", JSON.stringify(state.CartItem));
          toast.success(`${action.payload.title} Added to Cart`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      },
      RemoveItem: (state, action) => {
        const RemoveItem = state.CartItem.filter(
          (item) => item.id !== action.payload.id
        );
        state.CartItem = RemoveItem;
        localStorage.setItem("CartItem", JSON.stringify(state.CartItem));
        toast(`${action.payload.title} Removed the Item`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      },
      RemoveAll: (state, action) => {
        const RemoveALL = state.CartItem.filter(
          (item) => item.id === action.payload.id
        );
        state.CartItem = RemoveALL;
        localStorage.setItem("CartItem", JSON.stringify(state.CartItem));
        toast(`${action.payload.title} Remove All Item`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      },
      Increment: (state,action) => {
        const FindIndex = state.CartItem.findIndex(
          (item) => item.id === action.payload.id
        );
      
        if(FindIndex >= 0){
          state.CartItem[FindIndex].cartQuantity += 1;
          toast.success(`${action.payload.title} Increased`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      },
      Decrement: (state,action) => {
         const DeIndex = state.CartItem.findIndex(
           (item) => item.id === action.payload.id
         );
         if(state.CartItem[DeIndex].cartQuantity > 1){
            state.CartItem[DeIndex].cartQuantity -= 1;
            toast.info(`${action.payload.title} Decreased Item`, {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
         };
      },
      Gettotal: (state,action) =>{     
       const cartItemvalue = state.CartItem.reduce(
         (PreviousItem, currentItem) => {              
           const { price, cartQuantity, discountPercentage } = currentItem;
           const TotalAmount = price * cartQuantity - discountPercentage;
           PreviousItem.TotalAmount += Math.round(TotalAmount);
           PreviousItem.TotalCartItem += cartQuantity;
           return PreviousItem;
         },
         {
           TotalCartItem: 0,
           TotalAmount: 0,
         }
       ); 
       state.TotalCartItem += cartItemvalue.TotalCartItem;
       state.TotalAmount += cartItemvalue.TotalAmount;
      }
    },
  });
  
// Action creators are generated for each case reducer function
export const {CartItem,RemoveItem,RemoveAll,Increment,Decrement,Gettotal} = AddtoCartSlice.actions

export default AddtoCartSlice.reducer