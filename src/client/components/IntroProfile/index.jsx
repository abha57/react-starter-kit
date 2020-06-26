import React from 'react';
import './style.scss';

const IntroProfile = () => {
  return (
    <section className="cover cover-post cover-post-background">
      <div className="cover-background"></div>
      <div className="cover-contents">
        <section>
          <h1 className="post-title">APAAR BHATNAGAR</h1>
          <h3 className="post-content">
            Dynamic Full Stack Web developer skilled at developing complex
            solutions possessing strong creative thinking skills, high energy
            and integrity.
          </h3>
        </section>
      </div>
      <div className="cover-contents">
        <img src="src/public/babayoda.jpeg" alt="image" />
      </div>
    </section>
  );
};

export default IntroProfile;
