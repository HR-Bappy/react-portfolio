import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          

          <div className="banner-text">
            <h1>Software Developer</h1>

            <hr />

            <p>
              Web-Development | Bootstrap | JavaScript | React-js | App-Development | JAVAFX 
            </p>

            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Freecodecamp */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-free-code-camp" aria-hidden="true" />
              </a>

              {/* Youtube */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;