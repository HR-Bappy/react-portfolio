import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import Home from '../Views/HomePage';
import About from '../Views/Aboutus';
import Services from '../Views/Services';
import Work from '../Views/Ourwork';
import Career from '../Views/Career';
import Blog from '../Views/Blog';
import Contact from '../Views/Contactus';

class Section extends React.Component{
  render(){
    return(
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/services" component={Services} />
        <Route path="/our-work" component={Work}/>
        <Route path="/career" component={Career}/>
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </section>
    )
  }
}

export default Section;