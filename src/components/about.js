import React, { Component } from 'react';
import text_content from '../constants/about_data.js';
import photo from '../constants/photo.jpg';

class About extends Component {



  render() {
    return (
      <div className="about-div">
        <div className="about-heading">
          <div className="about-heading-div-left">
            <h3 className="about-number">1.</h3>
            <h3 className="about-heading">ABOUT</h3>
          </div>
          <div className="about-heading-div-right">
            <hr></hr>
          </div>
        </div>

        <div className="about-main">
          <div className="about-main-left"></div>
          <div className="about-main-right">
            <p className="about-main-text"> { text_content['para'] } </p>
            <img className="headshot" src={photo} alt="Headshot" />
          </div>
        </div>


      </div>
    )
  }
}

export default About
