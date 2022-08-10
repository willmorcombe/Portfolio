import React, { PureComponent } from 'react';
import './navbar.css';
import {BiHomeAlt} from 'react-icons/bi';
import {BsFillPersonFill} from 'react-icons/bs';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {GiNetworkBars} from 'react-icons/gi';
import {useState} from 'react';

class Navbar extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      activeNav : '#'
    };
  }

  render() {

    return (
      <nav>
        <a href='#' onClick={() => this.setState({ activeNav: '#'})}
        className={this.state.activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>

        <a href='#about' onClick={() => this.setState({ activeNav: '#about'})}
        className={this.state.activeNav === '#about' ? 'active' : ''}><BsFillPersonFill/></a>

        <a href='#experience' onClick={() => this.setState({ activeNav: '#experience'})}
        className={this.state.activeNav === '#experience' ? 'active' : ''}><GiNetworkBars/></a>

        <a href='#projects' onClick={() => this.setState({ activeNav: '#projects'})}
        className={this.state.activeNav === '#projects' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>

        <a href='#contact' onClick={() => this.setState({ activeNav: '#contact'})}
        className={this.state.activeNav === '#contact' ? 'active' : ''}><AiOutlineMail/></a>
      </nav>
    );
  }


}

export default Navbar;
