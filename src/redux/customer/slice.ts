import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  id: string;
}

const initialState: CustomerState = {
  id: "cus_K8ob5fw3bRBHU5",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomerId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const { setCustomerId } = customerSlice.actions;
export default customerSlice.reducer;
