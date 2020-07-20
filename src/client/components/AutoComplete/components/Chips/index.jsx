import React, { memo } from 'react';
import './styles.scss';

const Chips = ({ chip, removeMovie }) => {
  const removeMovieClick = () => {
    removeMovie(chip);
  };
  return (
    <div className="chip">
      {chip.Title}
      <span className="remove-movie" onClick={removeMovieClick}>
        &#10006;
      </span>
    </div>
  );
};

export default memo(Chips);
