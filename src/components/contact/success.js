import React, { Component } from 'react';
import './success.css';

import {useState} from 'react';


class Contact extends Component {

  render() {


    return (
      <article className={this.props.successClassName} id="success">
        <h5 className="success-banner-text">Your message has been sent, and I will be in contact shortly.</h5>
      </article>
    )
  }
}

export default Contact;
