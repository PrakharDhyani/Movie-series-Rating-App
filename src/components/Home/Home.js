import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing"

import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/movies/movieSlice';
import { useDispatch } from 'react-redux';

export default function Home() {
    const movieText = "harry";
    const ShowText = "friends";
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(ShowText));
    }, [dispatch]);

    return (
        <div>
            <div className='banner-img' ></div>
            <MovieListing />
        </div>
    )
}
