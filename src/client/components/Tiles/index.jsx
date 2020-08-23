import React, { useState, useEffect, createRef } from 'react';
import { isEmpty } from 'lodash';
import './style.scss';

const Tiles = props => {
  const { tiles } = props;
  const [refs, setRefs] = useState([]);

  const createImageObserver = () => {
    const observer = new IntersectionObserver((entries, self) => {
      entries.map(entry => {
        if (entry.isIntersecting) {
          const url = entry.target.dataset.url;
          entry.target.src = url;
          self.unobserve(entry.target);
        }
      });
    });
    return observer;
  };
  const [imageObserver] = useState(createImageObserver);

  useEffect(() => {
    refs.forEach(ref => {
      imageObserver.observe(ref.current);
    });
  }, [refs, imageObserver]);

  useEffect(() => {
    if (tiles) {
      setRefs(newRef => {
        return Array(tiles.length)
          .fill()
          .map((_, i) => newRef[i] || createRef());
      });
    }
  }, [tiles]);

  return (
    <div className="tiles-container">
      {tiles && tiles.length > 0 ? (
        tiles.map((tile, index) => (
          <div key={tile.mission_name} className="tile">
            <div className="media-figure">
              <picture className="intrinsic intrinsic--100">
                <img
                  alt=""
                  ref={refs[index]}
                  data-url={tile.links.mission_patch_small}
                  className="intrinsic-item"
                />
              </picture>
            </div>
            <div className="tile-title">{tile.mission_name}</div>
            <div className="tile-details">
              <div>Mission Ids:</div>
              <div>
                {!isEmpty(tile.mission_id)
                  ? tile.mission_id.map((m, index) =>
                      index !== 0 ? `, ${m.toLowerCase()}` : m.toLowerCase()
                    )
                  : '-'}
              </div>
            </div>
            <div className="tile-details">
              <div>Launch year</div>
              <div>{tile.launch_year}</div>
            </div>
            <div className="tile-details">
              <div>Successful Launch</div>
              <div>{JSON.stringify(tile.launch_success)}</div>
            </div>
          </div>
        ))
      ) : (
        <div className="no-result"> No result found. </div>
      )}
    </div>
  );
};

export default Tiles;
