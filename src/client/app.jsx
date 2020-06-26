import React from 'react';
import Header from './components/Header';
import IntroProfile from './components/IntroProfile';
import Skills from './components/Skills';
import CarreerTimeLine from './components/CarreerTimeLine';

import './styles.scss';

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <IntroProfile />
        <Skills />
        <CarreerTimeLine />
      </div>
    </React.Fragment>
  );
};

export default App;
