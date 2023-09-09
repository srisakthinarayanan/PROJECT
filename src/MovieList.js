// src/components/MovieList.js

import React from 'react';

const MovieList = ({ movies, onSelect, onDelete }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <h2 onClick={() => onSelect(movie)}>{movie.title}</h2>
          <p>Year: {movie.year}</p>
          <p>Available on: {movie.availableOn}</p> {/* Display where the movie is available */}
          <button onClick={() => onDelete(movie.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
