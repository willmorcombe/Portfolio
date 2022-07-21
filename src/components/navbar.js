import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <div className="nav-div">
        <p>(logo)</p>
        <ol className="nav-list">
          <li className="nav-link"><a>ABOUT</a></li>
          <li className="nav-link"><a>EXPERIENCE</a></li>
          <li className="nav-link"><a>PROJECTS</a></li>
          <li className="nav-link"><a>CONTACT ME</a></li>
        </ol>

        <button className="nav-resume-button" onClick={this.downloadResume}>RESUME</button>

      </div>
    );
  }

  downloadResume() {
    console.log('this will hopefully download your resume')
  }
}

export default Navbar;
