import React, { PureComponent } from 'react';
import {useState} from 'react';


class AboutData extends PureComponent {

  render() {
    return (
      <p>A cheerful and enthusiastic <p style={{color:'var(--color-primary)', margin:'0', display:'inline-block'}}>software developer</p> with experience in <p style={{color:'var(--color-primary)', margin:'0', display:'inline-block'}}>data science</p> and <p style={{color:'var(--color-primary)', margin:'0', display:'inline-block'}}>web development</p> that is charged by a desire to learn and innovate (and some good coffee)! Through my recent job experience I have been able to put my artificial intelligence knowledge to the test and help integrate machine learning solutions into large scale projects and I have also been able to help create <p style={{color:'var(--color-primary)', margin:'0', display:'inline-block'}}>standalone sustainable web applications using Django. </p>My passion for technology of course
      delves deeper with long term interests in technology blogs, especially in machine learning, such as the
      OpenAI blog. Also keeping up with the latest developments in tech is incredibly important (and fun) so I
      often turn to The Next Web blog to keep myself updated in the advancements of technology.
      </p>

    )
  }
}

export default AboutData;
