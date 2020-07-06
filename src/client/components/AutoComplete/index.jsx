import React, { useState, useReducer } from 'react';
import AutoCompleteInput from './components/AutoCompleteInput';
import './styles.scss';

const initialState = {
  data: {
    chips: [],
    movies: []
  },
  error: null,
  loading: false
};

const types = {
  MOVIES_FETCH: 'MOVIES_FETCH',
  MOVIES_ERROR: 'MOVIES_ERROR',
  MOVIES_SUCCESS: 'MOVIES_SUCCESS',
  ADD_MOVIE_IN_CHIPS: 'ADD_MOVIE_IN_CHIPS',
  REMOVE_MOVIE_IN_CHIPS: 'REMOVE_MOVIE_IN_CHIPS',
  REMOVE_MOVIE_LIST: 'REMOVE_MOVIE_LIST'
};

const AutoComplete = () => {
  const reducer = (state, action) => {
    const { payload } = action;
    switch (action.type) {
      case types.MOVIES_FETCH:
        return {
          ...state,
          loading: true,
          error: null
        };
      case types.MOVIES_ERROR:
        return {
          ...state,
          loading: false,
          error: payload.error,
          data: null
        };
      case types.MOVIES_SUCCESS: {
        const { data } = payload;
        return {
          ...state,
          loading: false,
          data: {
            ...state.data,
            movies: data
          },
          error: null
        };
      }
      case types.ADD_MOVIE_IN_CHIPS: {
        const { movie } = payload;
        const {
          data: { chips }
        } = state;
        if (chips.length === 5) {
          return Object.assign({}, state);
        }
        return {
          ...state,
          data: {
            ...state.data,
            chips: [...chips, movie]
          }
        };
      }

      case types.REMOVE_MOVIE_IN_CHIPS: {
        const { movie } = payload;
        const filteredChips = state.data.chips.filter(
          chip => chip.Title !== movie.Title
        );
        return {
          ...state,
          data: {
            ...state.data,
            chips: filteredChips
          }
        };
      }

      case types.REMOVE_MOVIE_LIST: {
        return {
          ...state,
          data: {
            ...state.data,
            movies: []
          }
        };
      }

      default:
        return initialState;
    }
  };

  const debouncedApiCall = function(fn, delay) {
    let interval = null;

    return function() {
      let self = this;
      let args = [...arguments];
      clearTimeout(interval);
      interval = setTimeout(function() {
        fn.apply(self, args);
      }, delay);
    };
  };

  const onInputChange = function(inputParam) {
    fetch(`http://www.omdbapi.com/?s=${inputParam}&apikey=478d82db`)
      .then(res => res.json())
      .then(
        data => {
          const { Response, totalResults, Search } = data;
          if (Response) {
            dispatch({
              type: types.MOVIES_SUCCESS,
              payload: {
                data: Search
              }
            });
          }
        },
        error => {
          dispatch({
            type: types.MOVIES_ERROR,
            payload: {
              error
            }
          });
        }
      );
  };

  const onMovieListClick = movie => {
    dispatch({
      type: types.ADD_MOVIE_IN_CHIPS,
      payload: {
        movie
      }
    });
  };

  const removeMovie = movie => {
    dispatch({
      type: types.REMOVE_MOVIE_IN_CHIPS,
      payload: {
        movie
      }
    });
  };

  const removeMovieList = () => {
    dispatch({
      type: types.REMOVE_MOVIE_LIST
    });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AutoCompleteInput
      chips={state.data.chips}
      movies={state.data.movies}
      onMovieListClick={onMovieListClick}
      removeMovie={removeMovie}
      removeMovieList={removeMovieList}
      inputProps={{
        onInputChange: debouncedApiCall(onInputChange, 500)
      }}
    />
  );
};

export default AutoComplete;
