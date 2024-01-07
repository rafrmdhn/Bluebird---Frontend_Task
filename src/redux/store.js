import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import wishlistReducer from "./slice/wishlistSlice";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState, 
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
  console.log("STORE CHANGE : ", store.getState());
});

export default store;
