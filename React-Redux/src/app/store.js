import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlices";

export const store = configureStore({
  reducer: { counter: counterSlice },
});
