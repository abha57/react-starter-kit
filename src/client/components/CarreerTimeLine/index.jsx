import React from 'react';
import './style.scss';

const CarreerTimeLine = () => {
  return (
    <div className="timeline-section">
      <div className="timeline-bg"></div>
      <div className="timeline-container">
        <h3 className="timeline-heading">Career Timeline</h3>
        <div class="timeline">
          <div class="entry">
            <div class="title">
              <h3>Jul, 2018 - Present</h3>
              <p>Software Engineer, Paytm Payments Bank</p>
            </div>
            <div class="body">
              <p>
                Tech stack - ReactsJS, Redux, Saga, NodeJS, Express, Webpack,
                Docker, nginx, Rest APIs, MYSQL.
              </p>
              <ul>
                <li>
                  UAP - Unified Agent Panel (Apr 2020 - Current)
                  <div>
                    Working as Senior Software Engineer. Gathering requirements
                    for Product, looking over its implementation at the code
                    level, guiding team mates of 5 people over the development
                    cycle.
                  </div>
                </li>
                <li>
                  BOP - Back Office Panel (Sept 2018 - Apr 2020)
                  <div>
                    Technologies used are React JS, Redux, Saga, Webpack,
                    NodeJS, Express JS.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <h3>October, 2015 - June, 2018</h3>
              <p>Software Engineer, Publicis Sapient</p>
            </div>
            <div class="body">
              <p>
                Tech Stack - HTML, CSS, JS, AngularJS(1.x), Riot JS, J query,
                Sass, Jasmine(TDD)
              </p>
              <ul>
                <li>
                  Worked with multiple clients Goldman Sachs, ATDW, Medtronix,
                  Colt.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarreerTimeLine;
