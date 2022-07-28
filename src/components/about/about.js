import React, { Component } from 'react';
import './about.css';
import ME from '../../assets/me.jpg';
import CONTENT from '../../constants/about_data.js';
import {IoMdGitNetwork} from 'react-icons/io';
import {GiFilmProjector} from 'react-icons/gi';
import {MdSchool} from 'react-icons/md';

class About extends Component {


  render() {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about-container">
          <div className="about-me">
            <div className="about-me-image">
              <img src={ME} alt="About image" />
            </div>

          </div>

          <div className="about-content">
            <div className="about-cards">
              <article className="about-card">
                <IoMdGitNetwork className="about-icon"/>
                <h5>Experience</h5>
                <small> 1+ Years Working</small>
              </article>

              <article className="about-card">
                <GiFilmProjector className="about-icon"/>
                <h5>Projects</h5>
                <small>20+ Projects Built</small>
              </article>

              <article className="about-card">
                <MdSchool className="about-icon"/>
                <h5>Education</h5>
                <small>One Bachelor One Masters</small>

              </article>
            </div>

            <p> {CONTENT['para']}</p>

            <a href="#contact" className="btn btn-primary"> Let's Talk</a>


          </div>

        </div>
      </section>
    )
  }
}

export default About
