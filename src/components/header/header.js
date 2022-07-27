import React, { Component } from 'react';
import './header.css';
import CV from '../../assets/Will CV.pdf';
import ME from '../../assets/me.png';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

class Header extends Component {

  render() {
    return (

      <header>
        <div className="container header-container">
          <h5>Hello, I'm</h5>
          <h1>Will Morcombe</h1>
          <h5 className="text-light">Developer</h5>


          {/* contact buttons */}
          <div className="cta">
            <a href={CV} Download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Contact</a>
          </div>


          {/* image of me */}
          <div className="me">
            <img src={ME} className="me-img" alt="me" />
          </div>



          {/* socials */}
          <div className="header-socials">
            <a href="https://www.linkedin.com/in/will-morcombe-bb59411a3/" target="_blank" className="socials"><BsLinkedin/></a>
            <a href="https://github.com/willmorcombe" target="_blank" className="socials"><BsGithub/></a>
          </div>



        </div>
      </header>
    )
  }
}

export default Header;
