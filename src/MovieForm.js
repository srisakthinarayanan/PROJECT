// src/components/MovieForm.js

import React, { useState, useEffect } from 'react';

const MovieForm = ({ movie, onSave, onCreate }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setYear(movie.year);
    } else {
      setTitle('');
      setYear('');
    }
  }, [movie]);

  const handleSave = () => {
    const updatedMovie = { ...movie, title, year: parseInt(year) };
    onSave(updatedMovie);
    setTitle('');
    setYear('');
  };

  const handleCreate = () => {
    const newMovie = { title, year: parseInt(year) };
    onCreate(newMovie);
    setTitle('');
    setYear('');
  };

  return (
    <div className="movie-form">
      <h2>{movie ? 'Edit Movie' : 'Add Movie'}</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Year:</label>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      {movie ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleCreate}>Create</button>
      )}
    </div>
  );
};

export default MovieForm;
