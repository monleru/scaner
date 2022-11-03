import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
  cb: any;
}

// Initial state
const initialState: AuthState = {
  cb: {USD: {Value: 0},EUR: {Value: 0}, CNY:{Value: 0},KZT:{Value: 0},UAH:{Value: 0}},
};

// Actual Slice 
export const authSlice = createSlice({
  name: "cb",
  initialState,
  reducers: {

    // Action to set the authentication status
    setAuthState(state, action) {
      state.cb = action.payload;
    },

  },
})

export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;