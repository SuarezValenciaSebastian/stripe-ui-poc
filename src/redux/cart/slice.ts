import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  product: {
    id: string;
    name: string;
    price: string;
  };
}

const initialState: CartState = {
  product: {
    id: "",
    name: "",
    price: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductId: (state, action: PayloadAction<string>) => {
      state.product.id = action.payload;
    },
    setProductName: (state, action: PayloadAction<string>) => {
      state.product.name = action.payload;
    },
    setProductPrice: (state, action: PayloadAction<string>) => {
      state.product.price = action.payload;
    },
  },
});

export const { setProductId, setProductName, setProductPrice } =
  cartSlice.actions;
export default cartSlice.reducer;
