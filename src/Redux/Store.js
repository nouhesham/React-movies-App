import { configureStore } from "@reduxjs/toolkit";
import Searchslice from "./Slices/SearchSlice";
import MoviesSlice from "./Slices/MoviesSlice";
import MediatypeSlice from "./Slices/MediatypeSlice.js";

const Store = configureStore({
  reducer: {
    search: Searchslice,
    movies: MoviesSlice,
    mediatype: MediatypeSlice,
  },
});

export default Store;
