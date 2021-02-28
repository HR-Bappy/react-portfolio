import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './resume';
import Projects from './projects';
import AboutMe from './aboutme';
import Achievement from './Achievement';
import Contact from './contact';
import Resume from './resume';

class Section extends React.Component{
  render(){
    return(
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/resume" component={Resume} exact />
        <Route path="/achievement" component={Achievement} />
        <Route path="/contact" component={Contact}/>
        <Route path="/abourme" component={AboutMe}/>
        <Route path="/project" component={Projects} />
      </section>
    )
  }
}

export default Section;
