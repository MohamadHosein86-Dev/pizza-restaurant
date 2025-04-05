import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./user/UserSlice";
import cartReducer from "./cart/CartReducer"

const store = configureStore({
    reducer:{
        userName : UserSlice,
        cartSlice : cartReducer
    }
});
export type AppDispatch = typeof store.dispatch;
export default store;