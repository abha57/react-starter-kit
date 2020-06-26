import React from 'react';
import './style.scss';

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skill-bg"></div>
      <div className="skill-container">
        <h3 className="skill-heading">Skill Sets</h3>
        <div className="skills-list">
          <div className="skill">
            <h4>HTML</h4>
            <div className="skill-slider-container">
              <span className="skill-count">50%</span>
              <div class="range">
                <input
                  readonly
                  type="range"
                  min="1"
                  max="100"
                  steps="10"
                  value="50"
                />
              </div>
            </div>
          </div>
          <div className="skill">
            <h4>HTML</h4>
            <div className="skill-slider-container">
              <span className="skill-count">50%</span>
              <div class="range">
                <input
                  readonly
                  type="range"
                  min="1"
                  max="100"
                  steps="10"
                  value="50"
                />
              </div>
            </div>
          </div>
          <div className="skill">
            <h4>HTML</h4>
            <div className="skill-slider-container">
              <span className="skill-count">50%</span>
              <div class="range">
                <input
                  readonly
                  type="range"
                  min="1"
                  max="100"
                  steps="10"
                  value="50"
                />
              </div>
            </div>
          </div>
          <div className="skill">
            <h4>HTML</h4>
            <div className="skill-slider-container">
              <span className="skill-count">50%</span>
              <div class="range">
                <input
                  readonly
                  type="range"
                  min="1"
                  max="100"
                  steps="10"
                  value="50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
