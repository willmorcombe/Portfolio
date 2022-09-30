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
                    <h4>Pandas</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience-details">
                  <BsPatchCheckFill/>
                  <div>
                    <h4>PyTorch</h4>
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
                <h3 className="experience-work-title">Data Scientist</h3>
              </div>

              <ul className="work-list">
                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p>Worked with project managers to design and create web applications using Django to help with the growing needs of the R&D team. One of the projects included completely re-engineering the way the R&D team run statistics on clients by creating a stand-alone tool to automate the whole process.</p>
                </li>

                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p> Created and deployed an NLP model to detect a candidate’s education and experience from a CV. The process included the model design, the data collection and annotation, model training and testing, and the final integration into existing projects. </p>
                </li>

                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p> Developed SQL queries and views to fetch necessary data from a legacy database as well as helping with the design process of other newly created databases.</p>
                </li>

                <li>
                  <AiOutlineCheck className="work-list-icon"/>
                  <p> Generated scripts for text mining and web crawling to gather large, but important datasets from websites to aid the machine learning models. </p>
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
