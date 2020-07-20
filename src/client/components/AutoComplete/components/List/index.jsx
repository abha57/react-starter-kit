import React, { memo } from 'react';
import './styles.scss';

const List = ({ movies, onMovieListClick }) => {
  const onMovieClick = movie => () => {
    onMovieListClick(movie);
  };
  return (
    <ul className="movie-list">
      {movies.map((movie, index) => (
        <li
          key={`${movie.Title}${index}`}
          className="movie-name"
          onClick={onMovieClick(movie)}
        >
          <div>{movie.Title}</div>
          <div>{movie.Year}</div>
        </li>
      ))}
    </ul>
  );
};

export default memo(List);
