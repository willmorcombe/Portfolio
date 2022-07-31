import React, { Component } from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsLinkedin} from 'react-icons/bs';
import emailjs from 'emailjs-com';
import Success from './success.js';

import {useState} from 'react';


class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: React.createRef(),
      submitted: false,
      successClassName: 'success-banner-render',
    }
  }


  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5jqurdn', 'template_08138hj', this.state.form.current, 'hppdX7YKuubnBomwf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    // after submit stuff...
    this.setState({submitted: true})
    document.getElementById('submit-message').reset();
    this.setState({successClassName: 'success-banner-show'})

    // wait 2 seconds then dont display the message
    setTimeout(() => {
      this.setState({successClassName: 'success-banner-render'})
    }, 5000)



  };

  render() {


    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact-container">
          <div className="contact-options">
            <article className="contact-option">
              <HiOutlineMail className="contact-icon"/>
              <h4>Email</h4>
              <h5>wtmorco@live.co.uk</h5>
              <a href="mailto:wtmorco@live.co.uk" target="_blank">Send a message</a>
            </article>

            <article className="contact-option">
              <BsLinkedin className="contact-icon"/>
              <h4>Linkedin</h4>
              <h5>Will Morcombe</h5>
              <a href="https://www.linkedin.com/in/will-morcombe-bb59411a3/" target="_blank">Send a message</a>
            </article>

          </div>


          <form ref={this.state.form} onSubmit={this.sendEmail} action="" id="submit-message">
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" placeholder="Your message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
            <Success successClassName={this.state.successClassName}/>
          </form>





        </div>
      </section>
    )
  }
}

export default Contact;
