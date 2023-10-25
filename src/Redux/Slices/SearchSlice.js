import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//initial state for the counter
const initialState = {
  search: "",
  results: [],
  error: null,
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchStart: (state) => {
      state.status = "searching";
      state.error = null;
    },
    searchSuccess: (state, action) => {
      state.status = "successful";
      state.results = action.payload;

      state.error = null;
    },
    searchfail: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const searchMoviesAsync = (query) => async (dispatch) => {
  dispatch(searchStart());
  try {
    const results = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${query} `
    );

    dispatch(searchSuccess(results.data));
  } catch (error) {
    dispatch(searchfail(error.message));
  }
};

export const { searchStart, searchSuccess, searchfail } = SearchSlice.actions;

export default SearchSlice.reducer;
