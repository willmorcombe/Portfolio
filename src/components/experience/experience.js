import React, { PureComponent } from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import {AiOutlineCheck} from 'react-icons/ai';
import {useState} from 'react';


class Experience extends PureComponent {
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
                    <small className="text-light">Skilled</small>
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
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>

                <article className="experience-details">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>Flask</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience-details">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>Pandas</h4>
                    <small className="text-light">Skilled</small>
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
                    <h4>Git</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience-details">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>Docker</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </div>


          </div>

          <h3 className={this.state.width > 1200 ? 'hidden' : 'experience-title-right'}>My Jobs</h3>

          <div className="experience-container-right">
            <article className="experience-work">
              <div className="experience-work-head">
                <h3 className="experience-work-name">CENTRAL TEST</h3>
                <h3 className="experience-work-title">Python Developer</h3>
                <h4 className="experience-work-title" style={{color: 'grey'}}>(2 + years)</h4>
              </div>

              <ul className="work-list">
                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p>Helped design and create a statistics tool, primarily backend (in <b>Django</b>) to help re-engineer the 
way the R&D team run statistics on client data, decreasing the time of analysis by over 50%.</p>
                </li>

                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p>Dealing with R&D requests to add features on their “Dictionary” project. This involved 
constantly updating / creating RESTful API’s, UI feature and database schemas in order to work 
with the teams underlying agile methodology. </p>
                </li>

                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p>Created and deployed an NLP models to detect a candidate’s education and experience from a 
                  CV. The process included the model design, data collection, annotation and model training.  </p>
                </li>

                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p>Adding a CV analysis feature on to the company testing server. Created and designed the model 
structure to fit with the companies micro-services framework. Writing backend RESTful API’s 
to access the NER models that were built for the feature (above point). Built in Flask.  </p>
                </li>

                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p>Developed SQL queries and views to fetch necessary data from a legacy database as well as 
                  helping with the design process of other newly created databases.  </p>
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
