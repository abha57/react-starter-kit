import React from 'react';

const Tiles = props => {
  const { tiles } = props;

  return (
    <div className="tiles-container">
      {tiles &&
        tiles.map(tile => (
          <div key={tile.mission_name} className="tile">
            {tile.mission_name}
          </div>
        ))}
    </div>
  );
};

export default Tiles;
