import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const MoviesList = await axios.get(
    "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9"
  );

  console.log(MoviesList.data.results);

  return MoviesList.data.results;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.moviesList = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
