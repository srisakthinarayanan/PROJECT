// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import ProfileIcon from './ProfileIcon'; // Import the ProfileIcon component
import movieData from './movies.json';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setMovies(movieData);
    setFilteredMovies(movieData);
  }, []);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);

    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredMovies(filtered);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleMovieSave = (updatedMovie) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === updatedMovie.id ? updatedMovie : movie
    );

    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
    setSelectedMovie(null);
  };

  const handleMovieDelete = (movieId) => {
    const updatedMovies = movies.filter((movie) => movie.id !== movieId);

    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
    setSelectedMovie(null);
  };

  const handleMovieCreate = (newMovie) => {
    const newMovieWithId = { ...newMovie, id: movies.length + 1 };
    const updatedMovies = [...movies, newMovieWithId];

    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Search</h1>
      
        <ProfileIcon /> {/* Add the ProfileIcon component */}
      </header>
      <SearchBar onSearch={handleSearch} />
      <div className="movie-app-container">
        <MovieList
          movies={filteredMovies}
          onSelect={handleMovieSelect}
          onDelete={handleMovieDelete}
        />
        <MovieForm
          movie={selectedMovie}
          onSave={handleMovieSave}
          onCreate={handleMovieCreate}
        />
      </div>
    </div>
  );
};

export default App;
