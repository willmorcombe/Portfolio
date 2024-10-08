import React, { PureComponent } from 'react';
import './about.css';
import ME from '../../assets/me.jpg';
import {IoMdGitNetwork} from 'react-icons/io';
import {GiFilmProjector} from 'react-icons/gi';
import {MdSchool} from 'react-icons/md';
import AboutData from './about_data.js';

class About extends PureComponent {


  render() {
    return (
      <section id="about">
        <div className="about-header-divider">,</div>
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
                <small> 2+ Years Working</small>
              </article>

              <article className="about-card">
                <GiFilmProjector className="about-icon"/>
                <h5>Projects</h5>
                <small>10+ Projects Built</small>
              </article>

              <article className="about-card education-card">
                <MdSchool className="about-icon"/>
                <h5>Education</h5>
                <small>Bsc First</small>
                <br></br>
                <small>Msc Distinction</small>

              </article>
            </div>

            <AboutData/>

            <a href="#contact" className="btn btn-primary"> Let's Talk</a>


          </div>

        </div>
      </section>
    )
  }
}

export default About
