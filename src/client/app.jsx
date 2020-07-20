import React from 'react';
import AutoComplete from './components/AutoComplete';
import './styles.scss';

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <AutoComplete />
      </div>
    </React.Fragment>
  );
};

export default App;
