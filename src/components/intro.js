import React, { Component } from 'react';

class Intro extends Component {

  render() {
    return (
      <div className="intro-div">
        <div className="intro-text-div">
          <h4 className="intro-name-small">
            Hi, my name is
          </h4>
          <h1 className="intro-name-large">
            Will Morcombe
          </h1>
          <h1 id="name-second" className="intro-name-large">
            I am a legend
          </h1>
          <p className="intro-name-description">
            just some stuff describing myself I guess and what I do
          </p>
        </div>
      </div>
    )
  }
}

export default Intro
