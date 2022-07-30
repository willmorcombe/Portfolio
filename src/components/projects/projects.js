import React, { Component } from 'react';
import './projects.css';
import SEPSIS_IMAGE from '../../assets/project.jpg';
import BUBBLE_IMAGE from '../../assets/sorting-viz-image.jpg';
import TETRIS_IMAGE from '../../assets/tetris-bot.jpg';
import MAZE_IMAGE from '../../assets/maze-generation.jpg';
import HANDWRITING_IMAGE from '../../assets/handwriting.jpg';
import PORTFOLIO_IMAGE from '../../assets/me.jpg';

import Modal from '../modal/modal.js';


import {useState} from 'react';

class Projects extends Component {


  constructor(props) {
    super(props);
    this.state = {
      openModal : false,
      project : false,
      data : null,
      isLoaded : false
    }
  }

  // util functions
  closeModal = () => {this.setState({openModal: false})}


  getData() {
    var data = {};

    var api_call = fetch('https://api.github.com/users/willmorcombe/repos')
      .then((response) => response.json())
      .then(datajson=> {
        for (var i = 0; i < Object.keys(datajson).length; i++) {
          data[i] = {
            name: datajson[i].name,
            description: datajson[i].description,
            language: datajson[i].language,
            url: datajson[i].svn_url
          }
        }
        this.setState({data: data});
        this.setState({isLoaded: true});

      })

  }

  setMultipleStates(project, modal) {
    this.setState({project: project});
    this.setState({openModal: modal});
  }



  render() {

    this.getData()
    return (



      <section id="projects">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>



        <div className="container project-container">

          <article className="project-item">
            <div className="project-item-image">
              <img className="project-image" src={BUBBLE_IMAGE} alt={this.state.isLoaded && this.state.data[0].name}/>
            </div>
            <h3>{this.state.isLoaded && this.state.data[0].name}</h3>
            <div className="project-item-button">
              <a className="btn" onClick={() => this.setMultipleStates(0, true)}>Read More</a>
            </div>
          </article>

          <article className="project-item">
            <div className="project-item-image">
              <img className="project-image" src={SEPSIS_IMAGE} alt={this.state.isLoaded && this.state.data[1].name}/>
            </div>
            <h3>{this.state.isLoaded && this.state.data[1].name}</h3>
            <div className="project-item-button">
              <a className="btn" onClick={() => this.setMultipleStates(1, true)}>Read More</a>
            </div>
          </article>

          <article className="project-item">
            <div className="project-item-image">
              <img className="project-image" src={MAZE_IMAGE} alt={this.state.isLoaded && this.state.data[2].name}/>
            </div>
            <h3>{this.state.isLoaded && this.state.data[2].name}</h3>
            <div className="project-item-button">
              <a className="btn" onClick={() => this.setMultipleStates(2, true)}>Read More</a>
            </div>
          </article>

          <article className="project-item">
            <div className="project-item-image">
              <img className="project-image" src={HANDWRITING_IMAGE} alt={this.state.isLoaded && this.state.data[3].name}/>
            </div>
            <h3>{this.state.isLoaded && this.state.data[3].name}</h3>
            <div className="project-item-button">
              <a className="btn" onClick={() => this.setMultipleStates(3, true)}>Read More</a>
            </div>
          </article>

          <article className="project-item">
            <div className="project-item-image">
              <img className="project-image" src={PORTFOLIO_IMAGE} alt={this.state.isLoaded && this.state.data[5].name}/>
            </div>
            <h3>{this.state.isLoaded && this.state.data[5].name}</h3>
            <div className="project-item-button">
              <a className="btn" onClick={() => this.setMultipleStates(5, true)}>Read More</a>
            </div>
          </article>

          <article className="project-item">
            <div className="project-item-image">
              <img className="project-image" src={TETRIS_IMAGE} alt={this.state.isLoaded && this.state.data[6].name}/>
            </div>
            <h3>{this.state.isLoaded && this.state.data[6].name}</h3>
            <div className="project-item-button">
              <a className="btn" onClick={() => this.setMultipleStates(5, true)}>Read More</a>
            </div>
          </article>









        </div>
        {this.state.openModal && <Modal closeModal={this.closeModal} project={this.state.project}
         project_data={this.state.data[this.state.project]}/>}
      </section>
    )
  }
}

export default Projects;
