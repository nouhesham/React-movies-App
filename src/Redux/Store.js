import { configureStore } from "@reduxjs/toolkit";
import Searchslice from "./Slices/SearchSlice";
import MoviesSlice from "./Slices/MoviesSlice";

const Store = configureStore({
  reducer: { search: Searchslice, movies: MoviesSlice },
});

export default Store;
