import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../Features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.css';
import Slider from "react-slick";
import { settings } from '../../common/setting';
export default function MovieListing() {
    // Allows you to extract data from the Redux store state, using a selector function.
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    let renderMovies = "", rendershows = "";
    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />
        })
    ) : (
        <div className="no-movies">
            <h2>{movies.Error}</h2 >
        </div >
    );
    rendershows = shows.Response === "True" ? (
        shows.Search.map((show, index) => {
            return <MovieCard key={index} data={show} />
        })
    ) : (
        <div className="no-movies">
            <h2>{shows.Error}</h2 >
        </div >
    );

    return (
        <div className='movieWrapper'>
            <div className='movieList'>
                <h2>Movies</h2>
                <div className='movieContainer'>
                    <Slider  {...settings} >{renderMovies}</Slider>
                </div>
            </div>
            <div className='showList'>
                <h2>show</h2>
                <div className='movieContainer'>
                    <Slider {...settings} > {rendershows}</Slider>
                </div>
            </div>
        </div>
    )
}
