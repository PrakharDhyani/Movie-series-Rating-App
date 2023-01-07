import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/movieSlice";

export const Store = configureStore({
    reducer: {
        movies: movieReducer
    }
});

