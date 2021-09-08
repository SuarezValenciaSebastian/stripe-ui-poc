import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import customerReducer from "./customer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
