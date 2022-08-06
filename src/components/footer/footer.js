import React, { Component } from 'react';
import './footer.css';

import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';


class Footer extends Component {
    render() {
        return (
          <footer>
            <div className="vl-left"></div>
            <div className="footer-main">
              <a href='#' className="footer-logo">Will Morcombe</a>

              <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>

              <div className="footer-socials">
                <a href="https://www.linkedin.com/in/will-morcombe-bb59411a3/" target="_blank" className="socials"><BsLinkedin/></a>
                <a href="https://github.com/willmorcombe" target="_blank" className="socials"><BsGithub/></a>

              </div>
            </div>
            <div className="vl-right"></div>


          </footer>
        )
    }
}

export default Footer;
