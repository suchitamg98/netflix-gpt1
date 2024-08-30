import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {},
  showGptSearch: false,
  gptMovies: null,
  MovieName: null,
  movieResults: null,

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { MovieName, movieResults } = action.payload;
      state.MovieName = MovieName;
      state.movieResults = movieResults;
    },
  },
});
export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
