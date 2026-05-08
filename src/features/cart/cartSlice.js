import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const getCartFromLocalStorage = () => {
  try {
    const items = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [];

    // Remove null/invalid items
    return items.filter((item) => item && item.id);
  } catch (error) {
    return [];
  }
};
const initialState = {
  items: getCartFromLocalStorage(),
};
const saveToLocalStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (!existingItem) {
        state.items.push({ ...product, quantity: 1 });
      }

      saveToLocalStorage(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveToLocalStorage(state.items);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
     if(item){

       if (item.quantity < 5) {
         item.quantity += 1;
         toast.success("product add")
         if (item.quantity > 5){
          //  alert("maximumlimit reach")
           toast.warning("maximum limit reach")
          }
        } else {
      toast.warning("Maximum limit reached");
    }
     }
      saveToLocalStorage(state.items);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter(
            (cartItem) => cartItem.id !== action.payload,
          );
        }
      }
      saveToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveToLocalStorage(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
