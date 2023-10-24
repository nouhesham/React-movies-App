import { configureStore } from "@reduxjs/toolkit";
import Searchslice from "./Slices/SearchSlice";

const Store = configureStore({
  reducer: { search: Searchslice },
});

export default Store;
