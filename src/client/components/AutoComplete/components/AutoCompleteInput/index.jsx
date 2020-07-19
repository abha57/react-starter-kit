import React, { useRef, useEffect } from 'react';
import Input from '../Input';
import Chips from '../Chips';
import List from '../List';
import './styles.scss';

const AutoCompleteInput = ({
  movies,
  chips,
  // inputProps,
  onInputChange,
  onMovieListClick,
  removeMovie,
  removeMovieList
}) => {
  const listRef = useRef(null);
  useEffect(() => {
    document.addEventListener('click', function(event) {
      if (listRef.current.contains(event.target)) {
        return;
      } else {
        removeMovieList();
      }
    });
  }, []);
  return (
    <React.Fragment>
      <div className="submit">
        {chips.length === 5 ? (
          <button disabled className="button max-movies">
            {' '}
            You have chosen maximum {chips.length} movies.
          </button>
        ) : (
          <button disabled className="button">
            {' '}
            You have chosen {chips.length} movies.
          </button>
        )}
      </div>
      <div className="auto-input">
        {chips && chips.length > 0
          ? chips.map((chip, index) => (
              <Chips
                key={`${chip.Title}${index}`}
                chip={chip}
                removeMovie={removeMovie}
              />
            ))
          : null}
        <Input onInputChange={onInputChange} />
        {movies && movies.length > 0 ? (
          <div ref={listRef} className="movie-list">
            <List movies={movies} onMovieListClick={onMovieListClick} />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default AutoCompleteInput;
