import React from 'react';
import Header from './components/Header';

import './styles.scss';

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <section className="cover cover-post cover-post-background">
          <div className="cover-background"></div>
          <div className="cover-contents">
            <section>
              <h1 className="post-title">APAAR BHATNAGAR</h1>
              <h3 className="post-content">
                I am a professional Full Stack web Developer with sense of
                translating business ideas into technical realm. From designs,
                to making your ideas moving on your screens, to providing the
                backend support, I will be there for you.
              </h3>
            </section>
          </div>
          <div className="cover-contents">
            <img src="public/babayoda.jpeg" alt="image" />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default App;
