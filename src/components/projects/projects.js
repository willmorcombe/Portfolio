import React, { Component } from 'react';
import './projects.css';
import IMG from '../../assets/project.jpg';
import Modal from '../modal/modal.js';
import {useState} from 'react';

class Projects extends Component {


  constructor(props) {
    super(props);
    this.state = {
      openModal : false
    }
  }



  render() {

    console.log(this.state.openModal);
    return (
      <section id="projects">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <Modal/>

        <div className="container project-container">

          <article className="project-item">
            <div className="project-item-image">
              <img src={IMG} alt="Project 1"/>
            </div>
            <h3>This is a project item</h3>
            <div className="project-item-button">
              <a className="btn"
              onClick={() => this.setState({ openModal: true })}

              >Read More</a>
            </div>
          </article>

          <article className="project-item">
            <div className="project-item-image">
              <img src={IMG} alt="Project 1"/>
            </div>
            <h3>This is a project item</h3>
            <div className="project-item-button">
              <a className="btn">Read More</a>
            </div>
          </article>

          <article className="project-item">
            <div className="project-item-image">
              <img src={IMG} alt="Project 1"/>
            </div>
            <h3>This is a project item</h3>
            <div className="project-item-button">
              <a className="btn">Read More</a>
            </div>
          </article>

          <article className="project-item">
            <div className="project-item-image">
              <img src={IMG} alt="Project 1"/>
            </div>
            <h3>This is a project item</h3>
            <div className="project-item-button">
              <a className="btn">Read More</a>
            </div>
          </article>

          <article className="project-item">
            <div className="project-item-image">
              <img src={IMG} alt="Project 1"/>
            </div>
            <h3>This is a project item</h3>
            <div className="project-item-button">
              <a className="btn">Read More</a>
            </div>
          </article>







        </div>
      </section>
    )
  }
}

export default Projects;
