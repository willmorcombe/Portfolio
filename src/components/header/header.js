import React, { PureComponent } from 'react';
import './header.css';
import CV from '../../assets/Will CV.pdf';
import ME from '../../assets/me.png';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';


class Header extends PureComponent {

  render() {
    return (

      <header>
        <div className="container header-container">

          <div className="header-name-div">
            <h1>Hello, I'm {<h1 className="header-name">Will Morcombe</h1>}
            I'm a software developer.
            </h1>
          </div>

          <h5 className="text-light">London</h5>


          {/* contact buttons */}
          <div className="cta">
            <a href={CV} Download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Contact</a>
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
