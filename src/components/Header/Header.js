import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import user from '../../images/user.jpg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/movies/movieSlice';

export default function Header() {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        // to handle refresh on the page after submitting the form
        e.preventDefault();
        if (term === "") return alert("Please enter a movie or show name");
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("");
    }

    return (
        <div className='header'>
            <div className='logo'>
                <Link to="/" >
                    Movie App
                </Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder='Search Any Movie or Show' value={term} onChange={(e) => { setTerm(e.target.value) }} />
                    <button type='submit'><i className='fa fa-search' ></i></button>
                </form>
            </div>
            <div className='user-image' >
                <img src={user} alt="user" />
            </div>
        </div>
    )
}







