import React, { Component } from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import {AiOutlineCheck} from 'react-icons/ai';
import {useState} from 'react';


class Experience extends Component {
 /* CHECKING TO SEE IF WINDOW RESIZE TO WORK WITH MOIBLE AND TABLETS */

  constructor(props) {
    super(props);
    this.state = {width : 0, height : 0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <section id="experience" className="experience-section">
        <div className="about-header-divider">,</div>
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>

        <div className="container experience-container">
          <h3 className="experience-title-left">My Skills</h3>
          <h3 className={this.state.width < 1200 ? 'hidden' : 'experience-title-right'}>My Jobs</h3>

          <div className="experience-container-left">

          {/* start of new article */}
            <div className="experience-languages">
              <h3>Programming Languages</h3>
              <div className="experience-content">
                <article className="experience-details languages-detial">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>Python</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience-details languages-detial">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>Javascript</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience-details languages-detial">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>HTML/CSS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience-details languages-detial">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>SQL</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
            </div>

            {/* start of new article */}
            <div className="expereience-frameworks">
              <h3>Frameworks / Libraries</h3>
              <div className="experience-content">
                <article className="experience-details">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>Django</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience-details">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>React</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience-details">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>Pandas</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience-details">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>PyTorch</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
            </div>

            {/* start of new article */}
            <div className="expereience-practices">
              <h3>Practices</h3>
              <div className="experience-content">
                <article className="experience-details">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>OOP</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience-details">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>Agile</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience-details">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>Gitlab</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience-details">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>Gitlab</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
            </div>


          </div>

          <h3 className={this.state.width > 1200 ? 'hidden' : 'experience-title-right'}>My Jobs</h3>

          <div className="experience-container-right">
            <article className="experience-work">
              <div className="experience-work-head">
                <h3>Data Scientist</h3>
              </div>

              <ul className="work-list">
                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p>Some point about working here add in constants ;alskdfjas;dflkj;asd flkas;dflkjasd ;lfkjasd;lfk j;lkj ;aslkdjf;aslkdfj ;aslkdfj ;aslkdfj ;asldkfj ;asdlkfjas;ldkfj; lk j</p>
                </li>

                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p>Some point about working here add in constants</p>
                </li>

                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p>Some point about working here add in constants</p>
                </li>

                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p>Some point about working here add in constants</p>
                </li>
              </ul>
            </article>
          </div>

        </div>
      </section>
    )
  }
}

export default Experience;
